import React, { useState, useEffect } from 'react'

function useAddEventListener(cName) {
  useEffect(() => {
    console.log(cName, '组件挂载|更新添加事件监听')
    return () => {
      console.log(cName, '卸载时取消事件监听')
    }
  })
}

function Home() {
  useAddEventListener('Home---')
  return (
    <div>
      Home组件
    </div>
  )
}

function About() {
  useAddEventListener('About---')
  return (
    <div>
      About组件
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {isShow && <Home />}
      {isShow && <About />}
      <button onClick={() => { setIsShow(!isShow) }}>切换</button>
    </div>
  )
}
export default App

