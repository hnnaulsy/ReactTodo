import React, { useState, useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'add':
      return { ...state, num: state.num + 1 }
    case 'sub':
      return { ...state, num: state.num - 1 }
    default:
      return { ...state }
  }
}

// Home 
function Home() {
  const [state, dispatch] = useReducer(reducer, { num: 0 })

  return (
    <div>
      <p>数据： {state.num}</p>
      <button onClick={() => { dispatch({ type: "add" }) }}>+ 1</button>
      <button onClick={() => { dispatch({ type: "sub" }) }}> - 1</button>
    </div>
  )
}

// About 
function About() {
  const [state, dispatch] = useReducer(reducer, { num: 10 })

  return (
    <div>
      <p>数据： {state.num}</p>
      <button onClick={() => { dispatch({ type: "add" }) }}>+ 1</button>
      <button onClick={() => { dispatch({ type: "sub" }) }}> - 1</button>
    </div>
  )

}


function App() {
  return (
    <div>
      <Home />
      <About />
    </div>
  )
}
export default App

