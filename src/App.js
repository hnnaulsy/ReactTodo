import { getElementError } from '@testing-library/dom'
import React, { useState, createRef, useRef, PureComponent } from 'react'

/**
 * 01 useRef 可以用于获取元素 
 * 02 useRef 还可以保存数据 
 * 03 useRef 保存的数据除非我们手动修改，否则的话它是不会改变的
 */

function App() {
  const [numState, setNumState] = useState(100)
  const obj = useRef(numState)

  function btnClick() {
    console.log(obj.current)
  }
  return (
    <div>
      <p>obj当中的 current: {obj.current}</p>
      <p>{numState}</p>
      <button onClick={() => { setNumState(numState + 1) }}>操作</button>
    </div>
  )
}
export default App

