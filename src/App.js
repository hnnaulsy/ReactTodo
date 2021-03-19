import React, { useState } from 'react'


/**
 * 1 什么是 HOOK 
 *  它就是一个特殊的函数 
 *  它就可以让函数式组件也具有类组件的特性
 * 
 * 2 为什么需要 HOOK 
 *  1 学习成本（相对）
 *  2 数据共享
 *  3 多个业务逻辑代码有可能会存在于同一个生命周期函数中
 * 
 * 3 useState 
 *  它是一个可以在函数组件中保存状态的 HOOK 函数  
 *  参数：保存状态的初始值 
 *  返回值 
 *    一个数组
 *    第一个元素就是当前保存的状态
 *    第二个元素就是修改当前保存状态的方法
 */
function App() {

  const arr = useState(0)
  const [state, setState] = arr
  console.log(state, setState)
  return (
    <div>
      数据： {state}
      <button onClick={() => { setState(state + 1) }}>+1</button>
      <button onClick={() => { setState(state - 1) }}>-1</button>
    </div>
  )
}
export default App

