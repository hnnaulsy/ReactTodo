import React, { useState, useRef, useEffect, useLayoutEffect } from 'react'
import './App.css'

function Home() {

  const oP = useRef()

  // useEffect(() => {
  //   oP.current.style.left = '0px'
  //   oP.current.style.left = '600px'
  //   console.log('挂载|更新, useEffect')
  //   return () => {
  //     console.log('卸载, useEffect')
  //   }
  // })

  useLayoutEffect(() => {
    oP.current.style.left = '0px'
    oP.current.style.left = '600px'
    console.log('挂载|更新, , useLayoutEffect')
    return () => {
      console.log('卸载, useLayoutEffect')
    }
  })
  return (
    <div>
      home组件
      <p ref={oP}>Home组件中的 P元素</p>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {isShow && <Home />}
      <button onClick={() => { setIsShow(!isShow) }}> 切换</button>
    </div>
  )
}
export default App

