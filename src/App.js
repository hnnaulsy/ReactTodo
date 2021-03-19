import React, { useState, useEffect } from 'react'


/**
 *  useEffect 
 *   挂载  更新  卸载
 */

function Header() {
  const [strState, setStrState] = useState('拉勾教育')
  const [numState, setNumState] = useState(10)

  useEffect(() => {
    console.log('挂载与更新操作完成了')
    return () => {
      console.log('卸载的时候执行')
    }
  }, [strState])

  return (
    <div>
      <p>{strState} <button onClick={() => { setStrState('大前端') }}>修改字符</button></p>
      <p>{numState} <button onClick={() => { setNumState(numState + 1) }}>修改数值</button></p>
    </div>
  )
}

function App() {
  const [isShow, setIsShow] = useState(true)
  return (
    <div>
      {isShow && <Header />}
      <hr />
      <button onClick={() => { setIsShow(!isShow) }}>切换</button>
    </div>
  )
}
export default App

