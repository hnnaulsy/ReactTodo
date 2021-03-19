import React, { useState, useEffect } from 'react'


/**
 */

function Header() {
  const [strState, setStrState] = useState('拉勾教育')
  const [numState, setNumState] = useState(10)

  useEffect(() => {
    // 事件监听添加操作
    console.log('事件监听添加操作')
    return () => {
      console.log('移除事件监听')
    }
  })

  useEffect(() => {
    // 发送网络请求获取数据
    console.log('发送网络请求获取数据')
  })

  useEffect(() => {
    // 判断是否登录
    console.log('判断是否登录')
  })

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

