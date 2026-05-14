import { NextRequest, NextResponse } from 'next/server'
import { getServerSession } from 'next-auth/next'
import { authOptions } from '../auth/[...nextauth]/route'
import { MongoClient, Db, Collection } from 'mongodb'

// MongoDB connection
let cachedDb: Db | null = null

async function connectToDatabase(): Promise<Db> {
  if (cachedDb) {
    return cachedDb
  }

  const client = new MongoClient(process.env.MONGODB_URI!)
  await client.connect()
  
  const dbName = process.env.MONGODB_DB_NAME || 'windsurf'
  const db = client.db(dbName)
  
  cachedDb = db
  return db
}

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

interface HistoryQuery {
  userId: string
  platform?: string
  tone?: string
  limit: number
  offset: number
  startDate?: string
  endDate?: string
}

// GET - Retrieve comment history
export async function GET(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const limitParam = searchParams.get('limit')
    const offsetParam = searchParams.get('offset')
    
    const query: HistoryQuery = {
      userId: session.user.id,
      platform: searchParams.get('platform') || undefined,
      tone: searchParams.get('tone') || undefined,
      limit: limitParam ? parseInt(limitParam) : 20,
      offset: offsetParam ? parseInt(offsetParam) : 0,
      startDate: searchParams.get('startDate') || undefined,
      endDate: searchParams.get('endDate') || undefined,
    }

    const db = await connectToDatabase()
    const collection = db.collection<CommentHistory>('comment_history')

    // Build filter
    const filter: any = { userId: query.userId }
    
    if (query.platform) {
      filter.platform = query.platform
    }
    
    if (query.tone) {
      filter.tone = query.tone
    }
    
    if (query.startDate || query.endDate) {
      filter.createdAt = {}
      if (query.startDate) {
        filter.createdAt.$gte = new Date(query.startDate)
      }
      if (query.endDate) {
        filter.createdAt.$lte = new Date(query.endDate)
      }
    }

    // Get total count
    const total = await collection.countDocuments(filter)

    // Get history with pagination
    const history = await collection
      .find(filter)
      .sort({ createdAt: -1 })
      .skip(query.offset)
      .limit(query.limit)
      .toArray()

    // Get analytics
    const analytics = await getAnalytics(db, query.userId)

    return NextResponse.json({
      success: true,
      data: history,
      pagination: {
        total,
        limit: query.limit,
        offset: query.offset,
        hasMore: query.offset + query.limit < total,
      },
      analytics,
    })

  } catch (error) {
    console.error('History GET error:', error)
    return NextResponse.json(
      { error: 'Failed to retrieve history' },
      { status: 500 }
    )
  }
}

// POST - Save new comment generation to history
export async function POST(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: Omit<CommentHistory, '_id' | 'userId' | 'createdAt' | 'updatedAt'> = await request.json()
    
    const historyItem: CommentHistory = {
      ...body,
      userId: session.user.id,
      createdAt: new Date(),
      updatedAt: new Date(),
    }

    const db = await connectToDatabase()
    const collection = db.collection<CommentHistory>('comment_history')

    const result = await collection.insertOne(historyItem)

    return NextResponse.json({
      success: true,
      data: {
        _id: result.insertedId,
        ...historyItem,
      },
    })

  } catch (error) {
    console.error('History POST error:', error)
    return NextResponse.json(
      { error: 'Failed to save to history' },
      { status: 500 }
    )
  }
}

// PUT - Update history item (e.g., mark selected variant)
export async function PUT(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const body: Partial<CommentHistory> & { _id: string } = await request.json()
    const { _id, ...updateData } = body

    if (!_id) {
      return NextResponse.json(
        { error: 'Missing history item ID' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const collection = db.collection<CommentHistory>('comment_history')

    // Verify ownership
    const existing = await collection.findOne({ _id, userId: session.user.id })
    if (!existing) {
      return NextResponse.json(
        { error: 'History item not found' },
        { status: 404 }
      )
    }

    updateData.updatedAt = new Date()

    const result = await collection.updateOne(
      { _id },
      { $set: updateData }
    )

    if (result.matchedCount === 0) {
      return NextResponse.json(
        { error: 'History item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      data: { _id, ...updateData },
    })

  } catch (error) {
    console.error('History PUT error:', error)
    return NextResponse.json(
      { error: 'Failed to update history' },
      { status: 500 }
    )
  }
}

// DELETE - Remove history item
export async function DELETE(request: NextRequest) {
  try {
    const session = await getServerSession(authOptions)
    if (!session) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 })
    }

    const { searchParams } = new URL(request.url)
    const id = searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { error: 'Missing history item ID' },
        { status: 400 }
      )
    }

    const db = await connectToDatabase()
    const collection = db.collection<CommentHistory>('comment_history')

    const result = await collection.deleteOne({
      _id: id,
      userId: session.user.id,
    })

    if (result.deletedCount === 0) {
      return NextResponse.json(
        { error: 'History item not found' },
        { status: 404 }
      )
    }

    return NextResponse.json({
      success: true,
      message: 'History item deleted successfully',
    })

  } catch (error) {
    console.error('History DELETE error:', error)
    return NextResponse.json(
      { error: 'Failed to delete history item' },
      { status: 500 }
    )
  }
}

// Analytics helper function
async function getAnalytics(db: Db, userId: string) {
  const collection = db.collection<CommentHistory>('comment_history')

  const [
    totalGenerations,
    platformStats,
    toneStats,
    recentActivity,
    averageConfidence,
  ] = await Promise.all([
    // Total generations
    collection.countDocuments({ userId }),
    
    // Platform usage
    collection.aggregate([
      { $match: { userId } },
      { $group: { _id: '$platform', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray(),
    
    // Tone usage
    collection.aggregate([
      { $match: { userId } },
      { $group: { _id: '$tone', count: { $sum: 1 } } },
      { $sort: { count: -1 } },
    ]).toArray(),
    
    // Recent activity (last 30 days)
    collection.aggregate([
      {
        $match: {
          userId,
          createdAt: { $gte: new Date(Date.now() - 30 * 24 * 60 * 60 * 1000) },
        },
      },
      {
        $group: {
          _id: { $dateToString: { format: '%Y-%m-%d', date: '$createdAt' } },
          count: { $sum: 1 },
        },
      },
      { $sort: { _id: 1 } },
    ]).toArray(),
    
    // Average confidence score
    collection.aggregate([
      { $match: { userId } },
      { $unwind: '$generatedVariants' },
      {
        $group: {
          _id: null,
          avgConfidence: { $avg: '$generatedVariants.confidence' },
        },
      },
    ]).toArray(),
  ])

  return {
    totalGenerations,
    platformStats,
    toneStats,
    recentActivity,
    averageConfidence: averageConfidence[0]?.avgConfidence || 0,
  }
}
