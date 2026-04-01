// app/layout.tsx
import './globals.css'
import type { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Easy Note - 留言板',
  description: '一个简单的留言板功能',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="zh-CN">
      <body>
        <nav className="navbar">
          <div className="nav-container">
            <Link href="/" className="logo">Easy Note</Link>
            <div className="nav-links">
              <Link href="/" className="nav-link">首页</Link>
              <Link href="/about" className="nav-link">关于</Link>
            </div>
          </div>
        </nav>
        <main className="container">
          {children}
        </main>
      </body>
    </html>
  )
}