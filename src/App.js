import React, { useState, memo, useCallback, useMemo } from 'react'

function getData() {
  console.log('getData被调用了')
  let data = 0
  for (let i = 0; i < 999; i++) {
    data += i
  }

  return data
}

function App() {
  console.log('App组件被渲染了')
  const [numState, setNumState] = useState(10)
  const [ageState, setAgeState] = useState(20)

  const num = useMemo(() => {
    return getData()
  }, [])

  function increment() {
    setNumState(numState + 10)
  }

  return (
    <div>
      <p>num数据： {numState}</p>
      <p>age数据： {ageState}</p>
      <button onClick={() => { increment() }}>修改</button>
      <p>{num}</p>
    </div>
  )
}
export default App

