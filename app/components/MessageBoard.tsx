// app/components/MessageBoard.tsx
'use client'

import { useState, useEffect } from 'react'

interface Message {
  id: number
  text: string
  timestamp: string
}

export default function MessageBoard() {
  const [messages, setMessages] = useState<Message[]>([])
  const [inputText, setInputText] = useState('')
  const [loading, setLoading] = useState(true)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState('')

  // 获取所有留言
  const fetchMessages = async () => {
    try {
      setLoading(true)
      const response = await fetch('/api/messages')
      if (!response.ok) throw new Error('获取留言失败')
      const data = await response.json()
      setMessages(data)
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生错误')
    } finally {
      setLoading(false)
    }
  }

  // 添加新留言
  const addMessage = async (text: string) => {
    try {
      setSubmitting(true)
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ text }),
      })
      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.error || '添加留言失败')
      }
      await fetchMessages() // 刷新留言列表
      setInputText('') // 清空输入框
    } catch (err) {
      setError(err instanceof Error ? err.message : '发生错误')
      setTimeout(() => setError(''), 3000)
    } finally {
      setSubmitting(false)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (inputText.trim()) {
      addMessage(inputText.trim())
    }
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  if (loading) {
    return (
      <div className="message-board">
        <div className="loading">加载留言中...</div>
      </div>
    )
  }

  return (
    <div className="message-board">
      <h2>📝 留言板</h2>
      
      {error && <div className="error">{error}</div>}
      <div>GA_ID:{process.env.NEXT_PUBLIC_GA_ID || 'Not set'}</div>
      <div className="messages">
        {messages.length === 0 ? (
          <div className="empty-messages">
            还没有留言，来发表第一条吧！
          </div>
        ) : (
          messages.map((message) => (
            <div key={message.id} className="message-card">
              <div className="message-text">{message.text}</div>
              <div className="message-time">
                {new Date(message.timestamp).toLocaleString('zh-CN')}
              </div>
            </div>
          ))
        )}
      </div>

      <form onSubmit={handleSubmit} className="message-form">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="写点什么吧..."
          className="message-input"
          disabled={submitting}
        />
        <button 
          type="submit" 
          className="submit-btn"
          disabled={submitting || !inputText.trim()}
        >
          {submitting ? '发送中...' : '发送留言'}
        </button>
      </form>
    </div>
  )
}
