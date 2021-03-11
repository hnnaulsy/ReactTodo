import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  console.log(props)
  return (
    <div>
      <button onClick={props.increment}>+1</button>
      <button onClick={() => { props.increment_n(5) }}>+5</button>
      <span>{props.count}</span>
      <button onClick={props.decrement}>-1</button>
    </div>
  )
}


const mapStateToProps = state => ({
  count: state.count
})

const mapDispatchToProps = dispatch => ({
  increment() {
    dispatch({ type: 'increment' })
  },
  increment_n(payload) {
    dispatch({ type: 'increment_n', payload })
  },
  decrement() {
    dispatch({ type: 'decrement' })
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)