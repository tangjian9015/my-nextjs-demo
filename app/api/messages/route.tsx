// app/api/messages/route.ts
import { NextRequest, NextResponse } from 'next/server'

// 消息类型定义
interface Message {
  id: number
  text: string
  timestamp: string
}

// 内存存储，开发环境下每次修改代码会重置，生产环境正常
let messages: Message[] = [
  {
    id: 1,
    text: '欢迎来到 Next.js 演示项目！🎉',
    timestamp: new Date().toISOString(),
  },
  {
    id: 2,
    text: '这个留言板展示了 Next.js 的 API 路由和客户端组件交互',
    timestamp: new Date(Date.now() - 3600000).toISOString(),
  },
]

let nextId = 3

// GET - 获取所有留言
export async function GET() {
  return NextResponse.json(messages)
}

// POST - 添加新留言
export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { text } = body

    // 验证输入
    if (!text || typeof text !== 'string') {
      return NextResponse.json(
        { error: '留言内容不能为空' },
        { status: 400 }
      )
    }

    if (text.trim().length === 0) {
      return NextResponse.json(
        { error: '留言内容不能为空字符串' },
        { status: 400 }
      )
    }

    if (text.length > 500) {
      return NextResponse.json(
        { error: '留言内容不能超过500个字符' },
        { status: 400 }
      )
    }

    // 创建新留言
    const newMessage: Message = {
      id: nextId++,
      text: text.trim(),
      timestamp: new Date().toISOString(),
    }

    messages.push(newMessage)

    return NextResponse.json(newMessage, { status: 201 })
  } catch (error) {
    return NextResponse.json(
      { error: '服务器错误，请稍后重试' },
      { status: 500 }
    )
  }
}