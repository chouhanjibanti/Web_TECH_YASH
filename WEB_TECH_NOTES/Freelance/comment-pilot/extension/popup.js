// Popup Script - Manages extension popup UI and interactions
class WindsurfPopup {
  constructor() {
    this.currentTab = null
    this.platform = 'unknown'
    this.init()
  }

  async init() {
    console.log('Windsurf: Popup initialized')
    await this.getCurrentTab()
    await this.detectPlatform()
    this.setupEventListeners()
    this.loadUserData()
    this.updateUI()
  }

  async getCurrentTab() {
    try {
      const [tab] = await chrome.tabs.query({ active: true, currentWindow: true })
      this.currentTab = tab
    } catch (error) {
      console.error('Windsurf: Failed to get current tab:', error)
    }
  }

  async detectPlatform() {
    if (!this.currentTab?.url) return

    try {
      const url = new URL(this.currentTab.url)
      const hostname = url.hostname

      if (hostname.includes('reddit.com')) this.platform = 'reddit'
      else if (hostname.includes('linkedin.com')) this.platform = 'linkedin'
      else if (hostname.includes('twitter.com') || hostname.includes('x.com')) this.platform = 'twitter'
      else if (hostname.includes('youtube.com')) this.platform = 'youtube'
      else if (hostname.includes('dev.to')) this.platform = 'devto'
      else this.platform = 'unknown'

      console.log('Windsurf: Detected platform:', this.platform)
    } catch (error) {
      console.error('Windsurf: Platform detection failed:', error)
    }
  }

  setupEventListeners() {
    // Generate comment button
    document.getElementById('generate-btn').addEventListener('click', () => {
      this.openGeneratePopup()
    })

    // Scrape button
    document.getElementById('scrape-btn').addEventListener('click', () => {
      this.performDeepScrape()
    })

    // Dashboard button
    document.getElementById('dashboard-btn').addEventListener('click', () => {
      this.openDashboard()
    })

    // Footer links
    document.getElementById('settings-link').addEventListener('click', (e) => {
      e.preventDefault()
      this.openSettings()
    })

    document.getElementById('help-link').addEventListener('click', (e) => {
      e.preventDefault()
      this.openHelp()
    })

    document.getElementById('feedback-link').addEventListener('click', (e) => {
      e.preventDefault()
      this.openFeedback()
    })
  }

  updateUI() {
    // Update platform display
    const platformIcon = document.getElementById('platform-icon')
    const platformName = document.getElementById('platform-name')

    platformIcon.className = `platform-icon ${this.platform}`
    platformIcon.textContent = this.getPlatformIcon(this.platform)
    platformName.textContent = this.getPlatformName(this.platform)

    // Update status
    const statusText = document.getElementById('status-text')
    if (this.platform === 'unknown') {
      statusText.textContent = 'Platform not supported'
    } else {
      statusText.textContent = 'Ready to generate'
    }

    // Enable/disable buttons based on platform
    const generateBtn = document.getElementById('generate-btn')
    const scrapeBtn = document.getElementById('scrape-btn')

    const isSupported = this.platform !== 'unknown'
    generateBtn.disabled = !isSupported
    scrapeBtn.disabled = !isSupported

    if (!isSupported) {
      generateBtn.style.opacity = '0.5'
      scrapeBtn.style.opacity = '0.5'
    }
  }

  getPlatformIcon(platform) {
    const icons = {
      reddit: 'R',
      linkedin: 'L',
      twitter: 'T',
      youtube: 'Y',
      devto: 'D',
      unknown: '?'
    }
    return icons[platform] || '?'
  }

  getPlatformName(platform) {
    const names = {
      reddit: 'Reddit',
      linkedin: 'LinkedIn',
      twitter: 'Twitter/X',
      youtube: 'YouTube',
      devto: 'Dev.to',
      unknown: 'Unknown Platform'
    }
    return names[platform] || 'Unknown'
  }

  async openGeneratePopup() {
    try {
      this.updateStatus('Opening generator...')
      
      // Send message to content script
      await chrome.tabs.sendMessage(this.currentTab.id, {
        action: 'openGeneratePopup',
        data: {
          platform: this.platform
        }
      })

      // Close popup
      window.close()
    } catch (error) {
      console.error('Windsurf: Failed to open generator:', error)
      this.showError('Failed to open generator. Please refresh the page and try again.')
    }
  }

  async performDeepScrape() {
    try {
      this.updateStatus('Analyzing content...')
      
      const response = await chrome.runtime.sendMessage({
        action: 'scrapeContent',
        data: {
          url: this.currentTab.url,
          platform: this.platform,
          method: 'auto'
        }
      })

      if (response.success) {
        this.updateStatus('Analysis complete')
        this.showScrapedContent(response.data)
      } else {
        throw new Error(response.error)
      }
    } catch (error) {
      console.error('Windsurf: Deep scrape failed:', error)
      this.showError('Failed to analyze content. Please try again.')
    }
  }

  showScrapedContent(data) {
    // Create a modal or expand the popup to show scraped content
    const content = `
      <div style="background: white; padding: 16px; border-radius: 8px; margin-top: 16px;">
        <h4 style="margin-bottom: 8px; font-size: 14px; font-weight: 600;">Analysis Results</h4>
        <div style="font-size: 12px; color: #6b7280;">
          <p><strong>Title:</strong> ${data.title || 'N/A'}</p>
          <p><strong>Author:</strong> ${data.author || 'N/A'}</p>
          <p><strong>Content:</strong> ${data.content?.substring(0, 200) || 'N/A'}${data.content?.length > 200 ? '...' : ''}</p>
          <p><strong>Comments found:</strong> ${data.comments?.length || 0}</p>
        </div>
      </div>
    `
    
    // Append to popup content
    const contentDiv = document.createElement('div')
    contentDiv.innerHTML = content
    document.querySelector('.content').appendChild(contentDiv)
  }

  openDashboard() {
    chrome.runtime.sendMessage({ action: 'openDashboard' })
    window.close()
  }

  openSettings() {
    chrome.tabs.create({ url: chrome.runtime.getURL('settings.html') })
    window.close()
  }

  openHelp() {
    chrome.tabs.create({ url: 'https://windsurf.ai/help' })
    window.close()
  }

  openFeedback() {
    chrome.tabs.create({ url: 'https://windsurf.ai/feedback' })
    window.close()
  }

  async loadUserData() {
    try {
      // Load user statistics
      const statsResponse = await chrome.runtime.sendMessage({
        action: 'getHistory',
        data: { limit: 1 }
      })

      if (statsResponse.success) {
        this.displayStats(statsResponse.data.analytics)
        this.displayRecentActivity(statsResponse.data.data.slice(0, 3))
      }
    } catch (error) {
      console.error('Windsurf: Failed to load user data:', error)
      // Don't show error for stats loading, just use defaults
      this.displayDefaultStats()
    }
  }

  displayStats(analytics) {
    const statsContainer = document.getElementById('stats-container')
    
    if (!analytics) {
      this.displayDefaultStats()
      return
    }

    statsContainer.innerHTML = `
      <div class="stats">
        <div class="stat">
          <div class="stat-value">${analytics.totalGenerations || 0}</div>
          <div class="stat-label">Total Generated</div>
        </div>
        <div class="stat">
          <div class="stat-value">${Math.round((analytics.averageConfidence || 0) * 100)}%</div>
          <div class="stat-label">Avg Confidence</div>
        </div>
      </div>
    `
  }

  displayDefaultStats() {
    const statsContainer = document.getElementById('stats-container')
    statsContainer.innerHTML = `
      <div class="stats">
        <div class="stat">
          <div class="stat-value">-</div>
          <div class="stat-label">Total Generated</div>
        </div>
        <div class="stat">
          <div class="stat-value">-</div>
          <div class="stat-label">Avg Confidence</div>
        </div>
      </div>
    `
  }

  displayRecentActivity(activities) {
    const activityContainer = document.getElementById('activity-container')
    
    if (!activities || activities.length === 0) {
      activityContainer.innerHTML = '<div style="text-align: center; color: #9ca3af; font-size: 12px; padding: 20px;">No recent activity</div>'
      return
    }

    const activityHTML = activities.map(item => `
      <div class="activity-item">
        <div class="activity-platform">${item.platform} • ${item.tone}</div>
        <div class="activity-time">${this.formatTime(item.createdAt)}</div>
      </div>
    `).join('')

    activityContainer.innerHTML = activityHTML
  }

  formatTime(dateString) {
    const date = new Date(dateString)
    const now = new Date()
    const diffMs = now - date
    const diffMins = Math.floor(diffMs / 60000)
    const diffHours = Math.floor(diffMs / 3600000)
    const diffDays = Math.floor(diffMs / 86400000)

    if (diffMins < 60) return `${diffMins}m ago`
    if (diffHours < 24) return `${diffHours}h ago`
    if (diffDays < 7) return `${diffDays}d ago`
    return date.toLocaleDateString()
  }

  updateStatus(text) {
    const statusText = document.getElementById('status-text')
    statusText.textContent = text
  }

  showError(message) {
    const errorContainer = document.getElementById('error-container')
    errorContainer.innerHTML = `<div class="error">${message}</div>`
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
      errorContainer.innerHTML = ''
    }, 5000)
  }
}

// Initialize popup when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new WindsurfPopup()
})

// Handle keyboard shortcuts
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    window.close()
  }
  if (e.key === 'g' && (e.ctrlKey || e.metaKey)) {
    e.preventDefault()
    document.getElementById('generate-btn').click()
  }
})
