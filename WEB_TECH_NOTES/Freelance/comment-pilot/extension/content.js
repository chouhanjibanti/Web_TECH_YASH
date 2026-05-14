// Content Script - Detects textareas and scrapes post context
class WindsurfContentScript {
  constructor() {
    this.platform = this.detectPlatform()
    this.postContent = ''
    this.postUrl = window.location.href
    this.toneOptions = ['professional', 'casual', 'humorous', 'empathetic', 'analytical', 'enthusiastic']
    this.init()
  }

  detectPlatform() {
    const hostname = window.location.hostname
    if (hostname.includes('reddit.com')) return 'reddit'
    if (hostname.includes('linkedin.com')) return 'linkedin'
    if (hostname.includes('twitter.com') || hostname.includes('x.com')) return 'twitter'
    if (hostname.includes('youtube.com')) return 'youtube'
    if (hostname.includes('dev.to')) return 'devto'
    return 'unknown'
  }

  init() {
    console.log(`Windsurf: Initialized on ${this.platform}`)
    this.scrapePostContent()
    this.setupTextareaDetection()
    this.setupMessageListener()
    this.injectWindsurfButton()
  }

  scrapePostContent() {
    const selectors = {
      reddit: {
        title: '[data-testid="post-title"] h1',
        content: '[data-testid="post-content"] > div, .usertext-body p',
        author: '[data-testid="post-author-link"]',
      },
      linkedin: {
        title: '.feed-shared-update-v2__description-wrapper span[aria-hidden="true"]',
        content: '.feed-shared-text',
        author: '.feed-shared-actor__name',
      },
      twitter: {
        title: '[data-testid="tweetText"]',
        content: '[data-testid="tweetText"]',
        author: '[data-testid="User-Name"] a span',
      },
      youtube: {
        title: '#title h1',
        content: '#description-inline-expander',
        author: '#owner-name a',
      },
      devto: {
        title: '.crayons-article__title',
        content: '.crayons-article__content p',
        author: '.crayons-article__author',
      },
    }

    const platformSelectors = selectors[this.platform]
    if (!platformSelectors) return

    try {
      const titleEl = document.querySelector(platformSelectors.title)
      const contentEl = document.querySelector(platformSelectors.content)
      const authorEl = document.querySelector(platformSelectors.author)

      const title = titleEl?.textContent?.trim() || ''
      const content = contentEl?.textContent?.trim() || ''
      const author = authorEl?.textContent?.trim() || ''

      this.postContent = `Title: ${title}\n\nContent: ${content}\n\nAuthor: ${author}`
      console.log('Windsurf: Scraped post content:', this.postContent.substring(0, 100) + '...')
    } catch (error) {
      console.error('Windsurf: Error scraping content:', error)
    }
  }

  setupTextareaDetection() {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        mutation.addedNodes.forEach((node) => {
          if (node.nodeType === Node.ELEMENT_NODE) {
            const textareas = node.querySelectorAll ? node.querySelectorAll('textarea, [contenteditable="true"]') : []
            textareas.forEach(textarea => this.addWindsurfUI(textarea))
            
            // Check if the node itself is a textarea
            if (node.tagName === 'TEXTAREA' || node.getAttribute('contenteditable') === 'true') {
              this.addWindsurfUI(node)
            }
          }
        })
      })
    })

    observer.observe(document.body, {
      childList: true,
      subtree: true
    })

    // Check existing textareas
    document.querySelectorAll('textarea, [contenteditable="true"]').forEach(textarea => {
      this.addWindsurfUI(textarea)
    })
  }

  addWindsurfUI(textarea) {
    // Skip if already has Windsurf UI
    if (textarea.dataset.windsurfAttached) return
    textarea.dataset.windsurfAttached = 'true'

    // Create Windsurf button
    const windsurfButton = document.createElement('button')
    windsurfButton.innerHTML = '🤖 Windsurf'
    windsurfButton.style.cssText = `
      position: absolute;
      right: 10px;
      top: 10px;
      background: #3b82f6;
      color: white;
      border: none;
      border-radius: 6px;
      padding: 6px 12px;
      font-size: 12px;
      cursor: pointer;
      z-index: 1000;
      transition: background 0.2s;
    `

    windsurfButton.addEventListener('mouseenter', () => {
      windsurfButton.style.background = '#2563eb'
    })

    windsurfButton.addEventListener('mouseleave', () => {
      windsurfButton.style.background = '#3b82f6'
    })

    windsurfButton.addEventListener('click', (e) => {
      e.preventDefault()
      e.stopPropagation()
      this.openWindsurfPopup(textarea)
    })

    // Position the button
    const textareaRect = textarea.getBoundingClientRect()
    const textareaStyle = window.getComputedStyle(textarea)
    
    if (textareaStyle.position === 'static') {
      textarea.style.position = 'relative'
    }

    textarea.parentElement.appendChild(windsurfButton)
  }

  openWindsurfPopup(textarea) {
    // Remove existing popup
    const existingPopup = document.getElementById('windsurf-popup')
    if (existingPopup) {
      existingPopup.remove()
    }

    // Create popup
    const popup = document.createElement('div')
    popup.id = 'windsurf-popup'
    popup.style.cssText = `
      position: fixed;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      width: 400px;
      max-width: 90vw;
      background: white;
      border-radius: 12px;
      box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
      z-index: 10000;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
    `

    popup.innerHTML = `
      <div style="padding: 20px; border-bottom: 1px solid #e5e7eb;">
        <div style="display: flex; justify-content: space-between; align-items: center;">
          <h3 style="margin: 0; font-size: 18px; font-weight: 600; color: #111827;">🤖 Windsurf AI</h3>
          <button id="close-popup" style="background: none; border: none; font-size: 20px; cursor: pointer; color: #6b7280;">×</button>
        </div>
      </div>
      
      <div style="padding: 20px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #374151;">Tone</label>
          <select id="tone-select" style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px;">
            ${this.toneOptions.map(tone => `<option value="${tone}">${tone.charAt(0).toUpperCase() + tone.slice(1)}</option>`).join('')}
          </select>
        </div>
        
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #374151;">Additional Context (optional)</label>
          <textarea id="additional-context" placeholder="Add any specific context or requirements..." style="width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; resize: vertical; min-height: 60px;"></textarea>
        </div>
        
        <div style="display: flex; gap: 8px;">
          <button id="generate-btn" style="flex: 1; background: #3b82f6; color: white; border: none; border-radius: 6px; padding: 10px 16px; font-size: 14px; font-weight: 500; cursor: pointer;">
            Generate Comments
          </button>
          <button id="cancel-btn" style="flex: 1; background: #f3f4f6; color: #374151; border: none; border-radius: 6px; padding: 10px 16px; font-size: 14px; font-weight: 500; cursor: pointer;">
            Cancel
          </button>
        </div>
        
        <div id="loading" style="display: none; margin-top: 16px; text-align: center; color: #6b7280; font-size: 14px;">
          Generating comments...
        </div>
        
        <div id="results" style="display: none; margin-top: 16px;">
          <div style="margin-bottom: 8px; font-size: 14px; font-weight: 500; color: #374151;">Generated Comments:</div>
          <div id="variants-container"></div>
        </div>
      </div>
    `

    document.body.appendChild(popup)

    // Add event listeners
    document.getElementById('close-popup').addEventListener('click', () => popup.remove())
    document.getElementById('cancel-btn').addEventListener('click', () => popup.remove())
    document.getElementById('generate-btn').addEventListener('click', () => {
      this.generateComments(textarea, popup)
    })

    // Close on outside click
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.remove()
      }
    })
  }

  async generateComments(textarea, popup) {
    const tone = document.getElementById('tone-select').value
    const additionalContext = document.getElementById('additional-context').value

    // Show loading
    document.getElementById('loading').style.display = 'block'
    document.getElementById('results').style.display = 'none'
    document.getElementById('generate-btn').disabled = true
    document.getElementById('generate-btn').textContent = 'Generating...'

    try {
      // Send message to background script
      const response = await chrome.runtime.sendMessage({
        action: 'generateComments',
        data: {
          platform: this.platform,
          tone,
          postContent: this.postContent,
          postUrl: this.postUrl,
          additionalContext
        }
      })

      if (response.success) {
        this.displayResults(response.data.variants, textarea, popup)
      } else {
        throw new Error(response.error || 'Failed to generate comments')
      }
    } catch (error) {
      console.error('Windsurf: Generation error:', error)
      alert('Failed to generate comments. Please try again.')
    } finally {
      document.getElementById('loading').style.display = 'none'
      document.getElementById('generate-btn').disabled = false
      document.getElementById('generate-btn').textContent = 'Generate Comments'
    }
  }

  displayResults(variants, textarea, popup) {
    const container = document.getElementById('variants-container')
    container.innerHTML = ''

    variants.forEach((variant, index) => {
      const variantDiv = document.createElement('div')
      variantDiv.style.cssText = `
        margin-bottom: 12px;
        padding: 12px;
        border: 1px solid #e5e7eb;
        border-radius: 6px;
        cursor: pointer;
        transition: all 0.2s;
      `

      variantDiv.innerHTML = `
        <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 8px;">
          <span style="font-size: 12px; color: #6b7280;">Variant ${index + 1}</span>
          <span style="font-size: 12px; color: #6b7280;">${Math.round(variant.confidence * 100)}% confidence</span>
        </div>
        <div style="font-size: 14px; color: #374151; line-height: 1.5; margin-bottom: 8px;">${variant.text}</div>
        <div style="font-size: 12px; color: #9ca3af; font-style: italic;">${variant.reasoning}</div>
      `

      variantDiv.addEventListener('mouseenter', () => {
        variantDiv.style.borderColor = '#3b82f6'
        variantDiv.style.backgroundColor = '#f0f9ff'
      })

      variantDiv.addEventListener('mouseleave', () => {
        variantDiv.style.borderColor = '#e5e7eb'
        variantDiv.style.backgroundColor = 'white'
      })

      variantDiv.addEventListener('click', () => {
        // Insert the selected comment
        if (textarea.tagName === 'TEXTAREA') {
          textarea.value = variant.text
          textarea.dispatchEvent(new Event('input', { bubbles: true }))
        } else if (textarea.getAttribute('contenteditable') === 'true') {
          textarea.textContent = variant.text
          textarea.dispatchEvent(new Event('input', { bubbles: true }))
        }

        // Save to history
        this.saveToHistory({
          platform: this.platform,
          tone: document.getElementById('tone-select').value,
          postContent: this.postContent,
          postUrl: this.postUrl,
          selectedVariant: variant.text,
          generatedVariants: variants
        })

        popup.remove()
      })

      container.appendChild(variantDiv)
    })

    document.getElementById('results').style.display = 'block'
  }

  async saveToHistory(data) {
    try {
      await chrome.runtime.sendMessage({
        action: 'saveToHistory',
        data
      })
    } catch (error) {
      console.error('Windsurf: Failed to save to history:', error)
    }
  }

  setupMessageListener() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      if (request.action === 'getPostContent') {
        sendResponse({
          platform: this.platform,
          postContent: this.postContent,
          postUrl: this.postUrl
        })
      }
    })
  }

  injectWindsurfButton() {
    // Add floating action button for mobile/quick access
    if (document.getElementById('windsurf-fab')) return

    const fab = document.createElement('div')
    fab.id = 'windsurf-fab'
    fab.innerHTML = '🤖'
    fab.style.cssText = `
      position: fixed;
      bottom: 20px;
      right: 20px;
      width: 56px;
      height: 56px;
      background: #3b82f6;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
      cursor: pointer;
      z-index: 9999;
      box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
      transition: all 0.2s;
    `

    fab.addEventListener('mouseenter', () => {
      fab.style.transform = 'scale(1.1)'
      fab.style.backgroundColor = '#2563eb'
    })

    fab.addEventListener('mouseleave', () => {
      fab.style.transform = 'scale(1)'
      fab.style.backgroundColor = '#3b82f6'
    })

    fab.addEventListener('click', () => {
      // Find the first available textarea or create a popup
      const firstTextarea = document.querySelector('textarea, [contenteditable="true"]')
      if (firstTextarea) {
        this.openWindsurfPopup(firstTextarea)
      } else {
        alert('No text area found. Please click on a comment box first.')
      }
    })

    document.body.appendChild(fab)
  }
}

// Initialize the content script
new WindsurfContentScript()
