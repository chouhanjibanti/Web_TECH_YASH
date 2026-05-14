# Windsurf - AI Comment Assistant

A powerful Chrome extension and Next.js dashboard that generates intelligent, context-aware comments for social media platforms using advanced AI.

## 🚀 Features

### Chrome Extension
- **Multi-Platform Support**: Works on Reddit, LinkedIn, Twitter/X, YouTube, and Dev.to
- **Smart Context Detection**: Automatically scrapes post content for better comment generation
- **Tone Selection**: Choose from professional, casual, humorous, empathetic, analytical, and enthusiastic tones
- **Real-time Generation**: Get 3 comment variants instantly with confidence scores
- **Floating Action Button**: Quick access from anywhere on supported platforms
- **Context Menu Integration**: Right-click selected text to generate comments

### Next.js Dashboard
- **Analytics & Insights**: Track comment generation statistics and performance
- **History Management**: View, search, and manage all generated comments
- **Platform Analytics**: See which platforms you use most
- **Tone Usage Tracking**: Understand your preferred comment styles
- **Interactive Charts**: Visualize your engagement over time
- **Secure Authentication**: NextAuth.js with Google/GitHub OAuth

## 🏗️ Architecture

```
windsurf/
├── extension/                 # Chrome Extension
│   ├── manifest.json         # Extension configuration
│   ├── content.js           # Content script for DOM interaction
│   ├── background.js        # Service worker for API calls
│   ├── popup.html           # Extension popup UI
│   └── popup.js             # Popup logic
└── nextjs-app/              # Next.js Backend + Dashboard
    ├── app/
    │   ├── api/            # API routes
    │   │   ├── generate/   # AI comment generation
    │   │   ├── scrape/     # Content scraping
    │   │   ├── history/    # MongoDB operations
    │   │   └── auth/       # NextAuth.js
    │   ├── dashboard/      # Dashboard UI
    │   └── page.tsx        # Landing page
    └── package.json        # Dependencies
```

## 🛠️ Tech Stack

### Frontend
- **React 18** with TypeScript
- **TailwindCSS** for styling
- **Recharts** for analytics
- **Lucide React** for icons

### Backend
- **Next.js 14** with App Router
- **NextAuth.js** for authentication
- **MongoDB** for data storage
- **Zod** for validation

### AI Services
- **Anthropic Claude** (primary)
- **OpenAI GPT-4** (fallback)

### Scraping
- **Cheerio** for static sites
- **Puppeteer** for JS-heavy sites
- **Playwright** for authenticated sessions

## 📦 Installation

### Prerequisites
- Node.js 18+
- MongoDB instance
- Chrome browser
- API keys for Anthropic and/or OpenAI

### 1. Clone and Setup Backend
```bash
cd nextjs-app
npm install
```

### 2. Environment Variables
Copy `.env.local.example` to `.env.local` and configure:

```env
# AI API Keys
ANTHROPIC_API_KEY=your_anthropic_api_key_here
OPENAI_API_KEY=your_openai_api_key_here

# Database
MONGODB_URI=mongodb://localhost:27017/windsurf

# NextAuth.js
NEXTAUTH_SECRET=your_nextauth_secret_here
NEXTAUTH_URL=http://localhost:3000

# OAuth Providers
GOOGLE_CLIENT_ID=your_google_client_id_here
GOOGLE_CLIENT_SECRET=your_google_client_secret_here
GITHUB_CLIENT_ID=your_github_client_id_here
GITHUB_CLIENT_SECRET=your_github_client_secret_here
```

### 3. Start Development Server
```bash
npm run dev
```
The dashboard will be available at `http://localhost:3000`

### 4. Install Chrome Extension
1. Open Chrome and go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked" and select the `extension` folder
4. The Windsurf icon will appear in your toolbar

## 🎯 Usage

### Chrome Extension
1. Navigate to a supported social media platform
2. Click on any comment box or textarea
3. Click the blue "🤖 Windsurf" button that appears
4. Select your desired tone and any additional context
5. Choose from 3 generated comment variants
6. Click to insert your favorite comment

### Dashboard
1. Sign in with Google or GitHub
2. View your comment generation statistics
3. Browse your comment history
4. Filter by platform, tone, or date range
5. Copy previous comments for reuse

## 🔧 Configuration

### Adding New Platforms
1. Update `PLATFORM_SELECTORS` in `/api/scrape/route.ts`
2. Add platform detection logic in `extension/content.js`
3. Update manifest permissions if needed

### Custom Tones
1. Add new tone options to `extension/content.js`
2. Update the AI prompt in `/api/generate/route.ts`
3. Add tone colors to dashboard analytics

### API Rate Limits
The extension includes built-in rate limiting and error handling. You can adjust these in the background script.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🔒 Privacy & Security

- All API calls are authenticated with NextAuth.js
- User data is encrypted in MongoDB
- Extension permissions are minimized to required functionality
- No data is shared with third parties

## 🆘 Support

- **Documentation**: Check the dashboard help section
- **Issues**: Open an issue on GitHub
- **Email**: support@windsurf.ai
- **Discord**: Join our community server

## 🗺️ Roadmap

- [ ] Support for more platforms (Instagram, Facebook, TikTok)
- [ ] Custom tone creation
- [ ] Comment templates
- [ ] Team collaboration features
- [ ] Advanced analytics and A/B testing
- [ ] Mobile app companion
- [ ] API for third-party integrations

---

Built with ❤️ by the Windsurf team
