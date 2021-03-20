import React, { useState, createRef, useRef, PureComponent, forwardRef, useImperativeHandle } from 'react'

function Home(props, oHome) {
  const oInput = useRef()
  useImperativeHandle(oHome, () => {
    return {
      setValue: () => {
        oInput.current.value = "Home自己实现的setValue方法"
      }
    }
  })
  return (
    <div>
      <h2>Home组件</h2>
      <input ref={oInput}></input>
    </div>
  )
}

const ForwardHome = forwardRef(Home)

function App() {
  const oHome = useRef()

  function btnClick() {
    console.log(oHome)
    oHome.current.setValue()
  }
  return (
    <div>
      <ForwardHome ref={oHome} />
      <button onClick={() => { btnClick() }}>操作input</button>
    </div>
  )
}
export default App

