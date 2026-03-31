// app/page.tsx
import MessageBoard from './components/MessageBoard'

export default function Home() {

  return (
    <>
      <div className="hero">
        <h1>Easy Note</h1>
        <p>一个简单而强大的留言板应用</p>
      </div>
      <MessageBoard />
    </>
  )
}