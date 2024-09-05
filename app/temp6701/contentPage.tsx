import { useEffect, useState } from "react"

const ContentPage = () => {
  const [content, setContent] = useState('')

  useEffect(() => {
    setContent('Content Page changed!')
  }, [])
  return (
    <>
      <h1>{content || 'Content Page'}</h1>
      <div onClick={() => setContent('Content Page changed AGAIN!')}>Change content</div>
    </>
  )
}

export default ContentPage