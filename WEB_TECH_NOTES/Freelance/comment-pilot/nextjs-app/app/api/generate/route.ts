import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'
// import Anthropic from '@anthropic'
import Anthropic from '@anthropic-ai/sdk'

import OpenAI from 'openai'

// Initialize AI clients
const anthropic = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY,
})

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

interface GenerateRequest {
  platform: string
  tone: string
  postContent: string
  additionalContext?: string
}

interface CommentVariant {
  text: string
  confidence: number
  reasoning: string
}

export async function POST(request: NextRequest) {
  try {
    // Verify user is authenticated
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: GenerateRequest = await request.json()
    const { platform, tone, postContent, additionalContext } = body

    // Validate required fields
    if (!platform || !tone || !postContent) {
      return NextResponse.json(
        { error: 'Missing required fields: platform, tone, postContent' },
        { status: 400 }
      )
    }

    // Construct the prompt
    const prompt = `You are an expert social media comment writer. Generate 3 different comment variants for the following post.

Platform: ${platform}
Tone: ${tone}
Post Content: ${postContent}
${additionalContext ? `Additional Context: ${additionalContext}` : ''}

Requirements:
- Match the specified tone exactly
- Be authentic and engaging
- Avoid generic responses
- Consider the platform's culture and norms
- Each comment should be unique in approach
- Comments should be concise but meaningful

Return a JSON response with this format:
{
  "variants": [
    {
      "text": "comment text here",
      "confidence": 0.85,
      "reasoning": "brief explanation of approach"
    }
  ]
}

Focus on creating comments that add value to the conversation while maintaining the requested tone.`

    let response: any
    let variants: CommentVariant[] = []

    // Try Claude first (better for nuanced tone)
    try {
      const claudeResponse = await anthropic.messages.create({
        model: 'claude-3-sonnet-20240229',
        max_tokens: 2000,
        messages: [
          {
            role: 'user',
            content: prompt,
          },
        ],
      })

      const content = claudeResponse.content[0]
      if (content.type === 'text') {
        response = JSON.parse(content.text)
        variants = response.variants
      }
    } catch (claudeError) {
      console.error('Claude API error:', claudeError)
      
      // Fallback to GPT-4
      try {
        const gptResponse = await openai.chat.completions.create({
          model: 'gpt-4',
          messages: [
            {
              role: 'system',
              content: 'You are an expert social media comment writer. Always respond with valid JSON.',
            },
            {
              role: 'user',
              content: prompt,
            },
          ],
          max_tokens: 2000,
          temperature: 0.7,
        })

        const gptContent = gptResponse.choices[0]?.message?.content
        if (gptContent) {
          response = JSON.parse(gptContent)
          variants = response.variants
        }
      } catch (gptError) {
        console.error('OpenAI API error:', gptError)
        throw new Error('Both AI providers failed')
      }
    }

    // Validate response format
    if (!variants || !Array.isArray(variants) || variants.length === 0) {
      throw new Error('Invalid response format from AI providers')
    }

    // Save to history (optional - you might want to do this asynchronously)
    // await saveToHistory(session.user.id, { platform, tone, postContent, variants })

    return NextResponse.json({
      success: true,
      variants,
      metadata: {
        platform,
        tone,
        generatedAt: new Date().toISOString(),
        postLength: postContent.length,
      },
    })

  } catch (error) {
    console.error('Generate API error:', error)
    
    if (error instanceof SyntaxError) {
      return NextResponse.json(
        { error: 'Invalid response from AI service' },
        { status: 500 }
      )
    }

    return NextResponse.json(
      { error: 'Failed to generate comments' },
      { status: 500 }
    )
  }
}

// Optional: Save generated comments to history
async function saveToHistory(userId: string, data: any) {
  // This would connect to your MongoDB history API
  // Implementation depends on your history route structure
  console.log('Saving to history:', { userId, data })
}
