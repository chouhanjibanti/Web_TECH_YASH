// Global type definitions for Windsurf project

declare module 'anthropic' {
  export interface Anthropic {
    messages: {
      create: (params: any) => Promise<any>
    }
  }
  const anthropic: Anthropic
  export default anthropic
}

declare module 'playwright' {
  export const chromium: {
    launch: (options?: any) => Promise<any>
  }
}

// MongoDB types
interface CommentHistory {
  _id?: string
  userId: string
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
    platformSpecific?: Record<string, any>
  }
  createdAt: Date
  updatedAt: Date
}

interface Analytics {
  totalGenerations: number
  platformStats: Array<{ _id: string; count: number }>
  toneStats: Array<{ _id: string; count: number }>
  recentActivity: Array<{ _id: string; count: number }>
  averageConfidence: number
}

export { CommentHistory, Analytics }
