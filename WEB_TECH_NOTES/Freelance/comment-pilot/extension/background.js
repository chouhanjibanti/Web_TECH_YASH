// Background Service Worker - Handles API communication and state management
class WindsurfBackground {
  constructor() {
    this.apiBaseUrl = 'http://localhost:3000'
    this.init()
  }

  init() {
    console.log('Windsurf: Background script initialized')
    this.setupMessageListeners()
    this.setupContextMenus()
  }

  setupMessageListeners() {
    chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
      console.log('Windsurf: Received message:', request.action)

      switch (request.action) {
        case 'generateComments':
          this.handleGenerateComments(request.data, sendResponse)
          return true // Keep message channel open for async response

        case 'saveToHistory':
          this.handleSaveToHistory(request.data, sendResponse)
          return true

        case 'getHistory':
          this.handleGetHistory(request.data, sendResponse)
          return true

        case 'scrapeContent':
          this.handleScrapeContent(request.data, sendResponse)
          return true

        case 'openDashboard':
          this.openDashboard()
          break

        case 'getAuthToken':
          this.getAuthToken(sendResponse)
          return true

        default:
          console.warn('Windsurf: Unknown action:', request.action)
          sendResponse({ error: 'Unknown action' })
      }
    })
  }

  setupContextMenus() {
    chrome.runtime.onInstalled.addListener(() => {
      // Create context menu for selected text
      chrome.contextMenus.create({
        id: 'windsurf-generate',
        title: 'Generate comment with Windsurf',
        contexts: ['selection'],
        documentUrlPatterns: [
          'https://*.reddit.com/*',
          'https://*.linkedin.com/*',
          'https://*.twitter.com/*',
          'https://*.x.com/*',
          'https://*.youtube.com/*',
          'https://*.dev.to/*'
        ]
      })

      // Create context menu for page action
      chrome.contextMenus.create({
        id: 'windsurf-dashboard',
        title: 'Open Windsurf Dashboard',
        contexts: ['page'],
        documentUrlPatterns: [
          'https://*.reddit.com/*',
          'https://*.linkedin.com/*',
          'https://*.twitter.com/*',
          'https://*.x.com/*',
          'https://*.youtube.com/*',
          'https://*.dev.to/*'
        ]
      })
    })

    chrome.contextMenus.onClicked.addListener((info, tab) => {
      if (info.menuItemId === 'windsurf-generate') {
        this.handleContextMenuGenerate(info, tab)
      } else if (info.menuItemId === 'windsurf-dashboard') {
        this.openDashboard()
      }
    })
  }

  async handleGenerateComments(data, sendResponse) {
    try {
      console.log('Windsurf: Generating comments for:', data.platform)

      const response = await fetch(`${this.apiBaseUrl}/api/generate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const result = await response.json()
      console.log('Windsurf: Generated comments successfully')

      sendResponse({ 
        success: true, 
        data: result 
      })

    } catch (error) {
      console.error('Windsurf: Generate comments error:', error)
      sendResponse({ 
        success: false, 
        error: error.message || 'Failed to generate comments' 
      })
    }
  }

  async handleSaveToHistory(data, sendResponse) {
    try {
      console.log('Windsurf: Saving to history')

      const response = await fetch(`${this.apiBaseUrl}/api/history`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const result = await response.json()
      console.log('Windsurf: Saved to history successfully')

      sendResponse({ 
        success: true, 
        data: result 
      })

    } catch (error) {
      console.error('Windsurf: Save history error:', error)
      sendResponse({ 
        success: false, 
        error: error.message || 'Failed to save to history' 
      })
    }
  }

  async handleGetHistory(data, sendResponse) {
    try {
      console.log('Windsurf: Fetching history')

      const params = new URLSearchParams(data || {})
      const response = await fetch(`${this.apiBaseUrl}/api/history?${params}`)

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const result = await response.json()
      console.log('Windsurf: Fetched history successfully')

      sendResponse({ 
        success: true, 
        data: result 
      })

    } catch (error) {
      console.error('Windsurf: Get history error:', error)
      sendResponse({ 
        success: false, 
        error: error.message || 'Failed to fetch history' 
      })
    }
  }

  async handleScrapeContent(data, sendResponse) {
    try {
      console.log('Windsurf: Scraping content:', data.url)

      const response = await fetch(`${this.apiBaseUrl}/api/scrape`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || `HTTP ${response.status}`)
      }

      const result = await response.json()
      console.log('Windsurf: Scraped content successfully')

      sendResponse({ 
        success: true, 
        data: result 
      })

    } catch (error) {
      console.error('Windsurf: Scrape content error:', error)
      sendResponse({ 
        success: false, 
        error: error.message || 'Failed to scrape content' 
      })
    }
  }

  async handleContextMenuGenerate(info, tab) {
    try {
      // Get selected text
      const selectedText = info.selectionText.trim()
      if (!selectedText) {
        console.warn('Windsurf: No selected text for context menu')
        return
      }

      // Detect platform from URL
      const url = new URL(tab.url)
      const platform = this.detectPlatformFromUrl(url.hostname)

      // Inject content script to get post context
      const results = await chrome.scripting.executeScript({
        target: { tabId: tab.id },
        func: () => {
          // This function runs in the content script context
          return window.windsurfData || { postContent: '', postUrl: window.location.href }
        }
      })

      const contextData = results[0]?.result || { postContent: '', postUrl: tab.url }

      // Send message to content script to open popup
      chrome.tabs.sendMessage(tab.id, {
        action: 'openGeneratePopup',
        data: {
          platform,
          postContent: contextData.postContent || selectedText,
          postUrl: contextData.postUrl,
          selectedText
        }
      })

    } catch (error) {
      console.error('Windsurf: Context menu generate error:', error)
    }
  }

  detectPlatformFromUrl(hostname) {
    if (hostname.includes('reddit.com')) return 'reddit'
    if (hostname.includes('linkedin.com')) return 'linkedin'
    if (hostname.includes('twitter.com') || hostname.includes('x.com')) return 'twitter'
    if (hostname.includes('youtube.com')) return 'youtube'
    if (hostname.includes('dev.to')) return 'devto'
    return 'unknown'
  }

  openDashboard() {
    chrome.tabs.create({ url: `${this.apiBaseUrl}/dashboard` })
  }

  async getAuthToken(sendResponse) {
    try {
      // Get auth token from storage or initiate auth flow
      const { authToken } = await chrome.storage.local.get(['authToken'])
      
      if (authToken) {
        sendResponse({ success: true, token: authToken })
      } else {
        // Open auth page
        chrome.tabs.create({ 
          url: `${this.apiBaseUrl}/api/auth/signin?extension=true` 
        })
        sendResponse({ success: false, needsAuth: true })
      }
    } catch (error) {
      console.error('Windsurf: Get auth token error:', error)
      sendResponse({ success: false, error: error.message })
    }
  }

  // Handle auth callback
  async handleAuthCallback(url) {
    try {
      const urlParams = new URLSearchParams(url.split('?')[1])
      const token = urlParams.get('token')
      
      if (token) {
        await chrome.storage.local.set({ authToken: token })
        console.log('Windsurf: Auth token saved')
        
        // Close auth tab
        const tabs = await chrome.tabs.query({ url: url })
        if (tabs.length > 0) {
          await chrome.tabs.remove(tabs[0].id)
        }
      }
    } catch (error) {
      console.error('Windsurf: Auth callback error:', error)
    }
  }
}

// Initialize background script
new WindsurfBackground()

// Handle installation and updates
chrome.runtime.onInstalled.addListener((details) => {
  console.log('Windsurf: Extension installed/updated:', details.reason)
  
  if (details.reason === 'install') {
    // First-time installation
    chrome.tabs.create({ 
      url: 'https://windsurf.ai/welcome' // Replace with actual welcome page
    })
  }
})

// Handle auth URL redirect
chrome.webNavigation.onBeforeNavigate.addListener((details) => {
  if (details.url.includes('windsurf-auth-callback')) {
    chrome.runtime.getBackgroundPage().then(bg => {
      if (bg && bg.windsurfBackground) {
        bg.windsurfBackground.handleAuthCallback(details.url)
      }
    })
  }
})
