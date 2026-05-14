import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'
import * as cheerio from 'cheerio'
import puppeteer from 'puppeteer'
import { chromium } from 'playwright'

interface ScrapeRequest {
  url: string
  platform: string
  method?: 'cheerio' | 'puppeteer' | 'playwright'
  useAuth?: boolean
}

interface ScrapeResponse {
  title: string
  content: string
  author: string
  metadata: Record<string, any>
  comments?: Array<{
    author: string
    text: string
    timestamp: string
  }>
}

// Platform-specific selectors
const PLATFORM_SELECTORS = {
  reddit: {
    title: 'h1[data-testid="post-title"]',
    content: '[data-testid="post-content"] > div',
    author: 'a[data-testid="post-author-link"]',
    comments: '.Comment',
    commentAuthor: '.Comment__author',
    commentText: '.Comment__body',
    commentTime: '.Comment__timestamp',
  },
  linkedin: {
    title: '.feed-shared-update-v2__description-wrapper',
    content: '.feed-shared-text',
    author: '.feed-shared-actor__name',
    comments: '.feed-shared-comment',
    commentAuthor: '.feed-shared-actor__name',
    commentText: '.feed-shared-text',
    commentTime: '.feed-shared-comment__time',
  },
  twitter: {
    title: '[data-testid="tweetText"]',
    content: '[data-testid="tweetText"]',
    author: '[data-testid="User-Name"] a',
    comments: '[data-testid="tweet"]',
    commentAuthor: '[data-testid="User-Name"] a',
    commentText: '[data-testid="tweetText"]',
    commentTime: 'time',
  },
  youtube: {
    title: '#title h1',
    content: '#description-inline-expander',
    author: '#owner-name a',
    comments: '#comment-section-renderer #comment',
    commentAuthor: '#author-text',
    commentText: '#content-text',
    commentTime: '.published-time-text',
  },
  devto: {
    title: 'h1.crayons-article__title',
    content: '.crayons-article__content',
    author: '.crayons-article__author',
    comments: '#comments .comment',
    commentAuthor: '.comment__author',
    commentText: '.comment__body',
    commentTime: '.comment__time',
  },
}

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: ScrapeRequest = await request.json()
    const { url, platform, method = 'auto', useAuth = false } = body

    if (!url || !platform) {
      return NextResponse.json(
        { error: 'Missing required fields: url, platform' },
        { status: 400 }
      )
    }

    // Validate URL
    try {
      new URL(url)
    } catch {
      return NextResponse.json(
        { error: 'Invalid URL format' },
        { status: 400 }
      )
    }

    // Auto-select scraping method
    let selectedMethod = method
    if (method === 'auto') {
      selectedMethod = selectScrapingMethod(platform, useAuth)
    }

    let result: ScrapeResponse

    switch (selectedMethod) {
      case 'cheerio':
        result = await scrapeWithCheerio(url, platform)
        break
      case 'puppeteer':
        result = await scrapeWithPuppeteer(url, platform)
        break
      case 'playwright':
        result = await scrapeWithPlaywright(url, platform, useAuth)
        break
      default:
        throw new Error(`Unsupported scraping method: ${selectedMethod}`)
    }

    return NextResponse.json({
      success: true,
      data: result,
      metadata: {
        url,
        platform,
        method: selectedMethod,
        scrapedAt: new Date().toISOString(),
      },
    })

  } catch (error) {
    console.error('Scrape API error:', error)
    return NextResponse.json(
      { error: 'Failed to scrape content' },
      { status: 500 }
    )
  }
}

function selectScrapingMethod(platform: string, useAuth: boolean): 'cheerio' | 'puppeteer' | 'playwright' {
  // Static sites - use Cheerio (fastest)
  if (['reddit', 'devto'].includes(platform)) {
    return 'cheerio'
  }

  // JS-heavy sites - use Puppeteer
  if (['linkedin', 'youtube'].includes(platform)) {
    return 'puppeteer'
  }

  // Auth required or complex sites - use Playwright
  if (useAuth || ['twitter'].includes(platform)) {
    return 'playwright'
  }

  return 'cheerio' // default
}

async function scrapeWithCheerio(url: string, platform: string): Promise<ScrapeResponse> {
  try {
    // Fetch HTML
    const response = await fetch(url, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
      },
    })

    if (!response.ok) {
      throw new Error(`HTTP ${response.status}: ${response.statusText}`)
    }

    const html = await response.text()
    const $ = cheerio.load(html)

    const selectors = PLATFORM_SELECTORS[platform as keyof typeof PLATFORM_SELECTORS]
    if (!selectors) {
      throw new Error(`No selectors defined for platform: ${platform}`)
    }

    // Extract basic content
    const title = $(selectors.title).text().trim() || ''
    const content = $(selectors.content).text().trim() || ''
    const author = $(selectors.author).text().trim() || ''

    // Extract comments if available
    let comments: ScrapeResponse['comments'] = []
    if (selectors.comments) {
      comments = $(selectors.comments)
        .map((_, el) => ({
          author: $(el).find(selectors.commentAuthor).text().trim(),
          text: $(el).find(selectors.commentText).text().trim(),
          timestamp: $(el).find(selectors.commentTime).text().trim(),
        }))
        .get()
        .filter(comment => comment.text)
    }

    return {
      title,
      content,
      author,
      metadata: {
        wordCount: content.split(/\s+/).length,
        commentCount: comments.length,
      },
      comments,
    }
  } catch (error) {
    throw new Error(`Cheerio scraping failed: ${error}`)
  }
}

async function scrapeWithPuppeteer(url: string, platform: string): Promise<ScrapeResponse> {
  let browser
  try {
    browser = await puppeteer.launch({
      headless: true,
      args: ['--no-sandbox', '--disable-setuid-sandbox'],
    })

    const page = await browser.newPage()
    await page.setUserAgent('Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36')
    
    // Wait for page to load
    await page.goto(url, { waitUntil: 'networkidle2' })

    const selectors = PLATFORM_SELECTORS[platform as keyof typeof PLATFORM_SELECTORS]
    if (!selectors) {
      throw new Error(`No selectors defined for platform: ${platform}`)
    }

    // Extract content using page.evaluate
    const result = await page.evaluate((sel) => {
      const getText = (selector: string) => {
        const el = document.querySelector(selector)
        return el ? el.textContent?.trim() || '' : ''
      }

      const title = getText(sel.title)
      const content = getText(sel.content)
      const author = getText(sel.author)

      // Extract comments
      let comments: any[] = []
      if (sel.comments) {
        const commentElements = document.querySelectorAll(sel.comments)
        comments = Array.from(commentElements).map(el => ({
          author: el.querySelector(sel.commentAuthor)?.textContent?.trim() || '',
          text: el.querySelector(sel.commentText)?.textContent?.trim() || '',
          timestamp: el.querySelector(sel.commentTime)?.textContent?.trim() || '',
        })).filter(comment => comment.text)
      }

      return {
        title,
        content,
        author,
        comments,
        metadata: {
          wordCount: content.split(/\s+/).length,
          commentCount: comments.length,
        },
      }
    }, selectors)

    return result

  } catch (error) {
    throw new Error(`Puppeteer scraping failed: ${error}`)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}

async function scrapeWithPlaywright(url: string, platform: string, useAuth: boolean): Promise<ScrapeResponse> {
  let browser
  try {
    browser = await chromium.launch({ headless: true })
    const context = await browser.newContext({
      userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36',
    })

    // Add auth cookies if needed (you'd need to implement cookie management)
    if (useAuth) {
      // await context.addCookies([...authCookies])
    }

    const page = await context.newPage()
    await page.goto(url, { waitUntil: 'networkidle' })

    const selectors = PLATFORM_SELECTORS[platform as keyof typeof PLATFORM_SELECTORS]
    if (!selectors) {
      throw new Error(`No selectors defined for platform: ${platform}`)
    }

    // Extract content
    const title = await page.locator(selectors.title).textContent() || ''
    const content = await page.locator(selectors.content).textContent() || ''
    const author = await page.locator(selectors.author).textContent() || ''

    // Extract comments
    let comments: ScrapeResponse['comments'] = []
    if (selectors.comments) {
      const commentElements = await page.locator(selectors.comments).all()
      comments = await Promise.all(
        commentElements.map(async (el) => ({
          author: await el.locator(selectors.commentAuthor).textContent() || '',
          text: await el.locator(selectors.commentText).textContent() || '',
          timestamp: await el.locator(selectors.commentTime).textContent() || '',
        }))
      )
      comments = comments.filter(comment => comment.text)
    }

    return {
      title: title.trim(),
      content: content.trim(),
      author: author.trim(),
      metadata: {
        wordCount: content.trim().split(/\s+/).length,
        commentCount: comments.length,
      },
      comments,
    }

  } catch (error) {
    throw new Error(`Playwright scraping failed: ${error}`)
  } finally {
    if (browser) {
      await browser.close()
    }
  }
}
