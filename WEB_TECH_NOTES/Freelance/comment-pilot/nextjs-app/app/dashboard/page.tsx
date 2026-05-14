'use client'

import { useState, useEffect } from 'react'
import { useSession, signOut } from 'next-auth/react'
import { 
  MessageSquare, 
  TrendingUp, 
  Calendar, 
  BarChart3, 
  Filter,
  Search,
  Trash2,
  ExternalLink,
  Copy,
  Check
} from 'lucide-react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'

interface HistoryItem {
  _id: string
  platform: string
  tone: string
  postContent: string
  postUrl?: string
  generatedVariants: Array<{
    text: string
    confidence: number
    reasoning: string
    selected?: boolean
  }>
  selectedVariant?: string
  metadata: {
    generatedAt: string
    postLength: number
  }
  createdAt: string
}

interface Analytics {
  totalGenerations: number
  platformStats: Array<{ _id: string; count: number }>
  toneStats: Array<{ _id: string; count: number }>
  recentActivity: Array<{ _id: string; count: number }>
  averageConfidence: number
}

const PLATFORM_COLORS = {
  reddit: '#FF4500',
  linkedin: '#0077B5',
  twitter: '#1DA1F2',
  youtube: '#FF0000',
  devto: '#000000',
}

const TONE_COLORS = [
  '#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'
]

export default function Dashboard() {
  const { data: session, status } = useSession()
  const [history, setHistory] = useState<HistoryItem[]>([])
  const [analytics, setAnalytics] = useState<Analytics | null>(null)
  const [loading, setLoading] = useState(true)
  const [searchTerm, setSearchTerm] = useState('')
  const [filterPlatform, setFilterPlatform] = useState('')
  const [filterTone, setFilterTone] = useState('')
  const [copiedId, setCopiedId] = useState<string | null>(null)

  useEffect(() => {
    if (status === 'authenticated') {
      fetchHistory()
    }
  }, [status, filterPlatform, filterTone])

  const fetchHistory = async () => {
    try {
      const params = new URLSearchParams()
      if (filterPlatform) params.append('platform', filterPlatform)
      if (filterTone) params.append('tone', filterTone)
      
      const response = await fetch(`/api/history?${params}`)
      const data = await response.json()
      
      if (data.success) {
        setHistory(data.data)
        setAnalytics(data.analytics)
      }
    } catch (error) {
      console.error('Failed to fetch history:', error)
    } finally {
      setLoading(false)
    }
  }

  const deleteHistoryItem = async (id: string) => {
    try {
      const response = await fetch(`/api/history?id=${id}`, { method: 'DELETE' })
      if (response.ok) {
        setHistory(history.filter(item => item._id !== id))
        fetchHistory() // Refresh analytics
      }
    } catch (error) {
      console.error('Failed to delete item:', error)
    }
  }

  const copyToClipboard = async (text: string, id: string) => {
    try {
      await navigator.clipboard.writeText(text)
      setCopiedId(id)
      setTimeout(() => setCopiedId(null), 2000)
    } catch (error) {
      console.error('Failed to copy:', error)
    }
  }

  const filteredHistory = history.filter(item =>
    item.postContent.toLowerCase().includes(searchTerm.toLowerCase()) ||
    item.generatedVariants.some(v => v.text.toLowerCase().includes(searchTerm.toLowerCase()))
  )

  if (status === 'loading') {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>
  }

  if (status === 'unauthenticated') {
    return <div className="flex items-center justify-center min-h-screen">
      <a href="/api/auth/signin" className="text-blue-600 hover:underline">Sign in to access dashboard</a>
    </div>
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              <MessageSquare className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Windsurf Dashboard</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">Welcome, {session?.user?.name}</span>
              <button
                onClick={() => signOut()}
                className="text-sm text-gray-500 hover:text-gray-700"
              >
                Sign out
              </button>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Analytics Overview */}
        {analytics && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <MessageSquare className="h-8 w-8 text-blue-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Total Generations</p>
                  <p className="text-2xl font-bold text-gray-900">{analytics.totalGenerations}</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <TrendingUp className="h-8 w-8 text-green-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Avg Confidence</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {(analytics.averageConfidence * 100).toFixed(1)}%
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <BarChart3 className="h-8 w-8 text-purple-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">Top Platform</p>
                  <p className="text-2xl font-bold text-gray-900 capitalize">
                    {analytics.platformStats[0]?._id || 'N/A'}
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="flex items-center">
                <Calendar className="h-8 w-8 text-orange-600" />
                <div className="ml-4">
                  <p className="text-sm font-medium text-gray-600">This Month</p>
                  <p className="text-2xl font-bold text-gray-900">
                    {analytics.recentActivity.reduce((sum, day) => sum + day.count, 0)}
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Charts */}
        {analytics && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Platform Usage</h3>
              <ResponsiveContainer width="100%" height={200}>
                <PieChart>
                  <Pie
                    data={analytics.platformStats}
                    dataKey="count"
                    nameKey="_id"
                    cx="50%"
                    cy="50%"
                    outerRadius={80}
                    label={({ _id, count }) => `${_id}: ${count}`}
                  >
                    {analytics.platformStats.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={PLATFORM_COLORS[entry._id as keyof typeof PLATFORM_COLORS] || '#8884d8'} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Recent Activity</h3>
              <ResponsiveContainer width="100%" height={200}>
                <LineChart data={analytics.recentActivity}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="_id" />
                  <YAxis />
                  <Tooltip />
                  <Line type="monotone" dataKey="count" stroke="#3b82f6" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>
        )}

        {/* Filters and Search */}
        <div className="bg-white rounded-lg shadow p-6 mb-6">
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search comments..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>
            </div>
            
            <select
              value={filterPlatform}
              onChange={(e) => setFilterPlatform(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Platforms</option>
              <option value="reddit">Reddit</option>
              <option value="linkedin">LinkedIn</option>
              <option value="twitter">Twitter</option>
              <option value="youtube">YouTube</option>
              <option value="devto">Dev.to</option>
            </select>

            <select
              value={filterTone}
              onChange={(e) => setFilterTone(e.target.value)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            >
              <option value="">All Tones</option>
              <option value="professional">Professional</option>
              <option value="casual">Casual</option>
              <option value="humorous">Humorous</option>
              <option value="empathetic">Empathetic</option>
              <option value="analytical">Analytical</option>
              <option value="enthusiastic">Enthusiastic</option>
            </select>
          </div>
        </div>

        {/* History List */}
        <div className="bg-white rounded-lg shadow">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Comment History</h2>
          </div>
          
          {loading ? (
            <div className="p-6 text-center">Loading history...</div>
          ) : filteredHistory.length === 0 ? (
            <div className="p-6 text-center text-gray-500">
              No history found. Start generating comments to see them here!
            </div>
          ) : (
            <div className="divide-y divide-gray-200">
              {filteredHistory.map((item) => (
                <div key={item._id} className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex items-center space-x-4">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 capitalize">
                        {item.platform}
                      </span>
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 capitalize">
                        {item.tone}
                      </span>
                      <span className="text-sm text-gray-500">
                        {new Date(item.createdAt).toLocaleDateString()}
                      </span>
                    </div>
                    <button
                      onClick={() => deleteHistoryItem(item._id)}
                      className="text-gray-400 hover:text-red-600 transition-colors"
                    >
                      <Trash2 className="h-4 w-4" />
                    </button>
                  </div>

                  <div className="mb-4">
                    <p className="text-sm text-gray-600 mb-2">Original Post:</p>
                    <p className="text-gray-900 line-clamp-3">{item.postContent}</p>
                    {item.postUrl && (
                      <a
                        href={item.postUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-sm text-blue-600 hover:text-blue-800 mt-2"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View original post
                      </a>
                    )}
                  </div>

                  <div>
                    <p className="text-sm text-gray-600 mb-2">Generated Variants:</p>
                    <div className="space-y-2">
                      {item.generatedVariants.map((variant, index) => (
                        <div
                          key={index}
                          className={`p-3 rounded-lg border ${
                            variant.selected
                              ? 'border-blue-500 bg-blue-50'
                              : 'border-gray-200 bg-gray-50'
                          }`}
                        >
                          <div className="flex justify-between items-start">
                            <div className="flex-1">
                              <p className="text-gray-900 mb-1">{variant.text}</p>
                              <div className="flex items-center space-x-4 text-xs text-gray-500">
                                <span>Confidence: {(variant.confidence * 100).toFixed(0)}%</span>
                                <span>{variant.reasoning}</span>
                              </div>
                            </div>
                            <button
                              onClick={() => copyToClipboard(variant.text, `${item._id}-${index}`)}
                              className="ml-4 text-gray-400 hover:text-gray-600 transition-colors"
                            >
                              {copiedId === `${item._id}-${index}` ? (
                                <Check className="h-4 w-4 text-green-600" />
                              ) : (
                                <Copy className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </main>
    </div>
  )
}
