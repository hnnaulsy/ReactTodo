import React, { useState, memo, useCallback, useContext } from 'react'

// Home 
function Home(props) {
  console.log('Home组件被渲染了')
  return (
    <div>
      <p>Home组件</p>
      <button onClick={() => { props.handler() }}>减小</button>
    </div>
  )
}

// About
function About(props) {
  console.log('About组件被渲染了')
  return (
    <div>
      <p>About组件</p>
      <button onClick={() => { props.handler() }}>增加</button>
    </div>
  )
}

const MemoHome = memo(Home)
const MemoAbout = memo(About)

function App() {
  console.log('App组件被渲染了')
  const [numState, setNumState] = useState(10)
  const [ageState, setAgeState] = useState(20)

  function increment() {
    setNumState(numState + 2)
  }

  // function decrement() {
  //   setAgeState(ageState - 4)
  // }

  // 
  const decrement = useCallback(() => {
    setAgeState(ageState - 4)
  }, [ageState])

  return (
    <div>
      <p>num数据： {numState}</p>
      <p>age数据： {ageState}</p>

      <hr />
      <MemoHome handler={decrement} />

      <hr />
      <MemoAbout handler={increment} />
    </div>
  )
}
export default App

