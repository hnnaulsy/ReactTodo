import React, { useState } from 'react'


/**
 * 01 在函数组件中可以多次使用同一个 HOOK 函数
 * 02 简单类型 复杂 
 * 03 set操作也是异步的， 不能直接修改 state 的原始值  
 */
function App() {
  const [ageState, setAgeState] = useState(10)
  const [nameState, setNameState] = useState('syy')

  const [personState, setPersonState] = useState({ "name": "zce", "age": 40 })
  const [listState, setListState] = useState([
    { "name": "zoe", "age": 18 },
    { "name": "zce", "age": 40 },
    { "name": "syy", "age": 20 },
  ])

  // 定义修改第一个 age 值的方法
  function incrementAge() {
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    // setAgeState(ageState + 10)
    setAgeState((pre) => pre + 10)
    setAgeState((pre) => pre + 10)
    setAgeState((pre) => pre + 10)
  }

  // 定义修改第二个人物状态 name 的操作
  function changeName() {
    // personState.name = '拉勾教育'
    setPersonState({ ...personState, name: '拉勾教育' })
  }

  return (
    <div>
      数据： {ageState}---{nameState}
      <button onClick={() => { incrementAge() }}>+1</button>
      <button onClick={() => { setAgeState(ageState - 1) }}>-1</button>
      <hr />
      数据： {personState.name}---{personState.age}
      <button onClick={() => { changeName() }}>+1</button>
      <hr />
      {
        listState.map(item => {
          return (
            <p>{item.name}---{item.age}</p>
          )
        })
      }
    </div>
  )
}
export default App

