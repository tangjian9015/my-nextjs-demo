// app/page.tsx
import MessageBoard from './components/MessageBoard'

export default function Home() {
  return (
    <>
      <div className="hero">
        <h1>欢迎来到 Next.js 演示项目</h1>
        <p>一个简单而强大的留言板应用，展示 Next.js 的核心功能</p>
      </div>
      <MessageBoard />
    </>
  )
}