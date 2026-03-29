'use client'

import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error(error)
  }, [error])

  return (
    <div className="error-container">
      <h2>出错了！</h2>
      <p>{error.message || '发生了一些错误'}</p>
      <button onClick={() => reset()}>重试</button>
    </div>
  )
}
