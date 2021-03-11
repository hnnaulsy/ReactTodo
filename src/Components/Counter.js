import React from 'react'
import { connect } from 'react-redux'

function Counter(props) {
  console.log(props)
  return (
    <div>
      <button onClick={() => { props.dispatch({ type: 'increment' }) }}>+1</button>
      <span>{props.count}</span>
      <button onClick={() => { props.dispatch({ type: 'decrement' }) }}>-1</button>
    </div>
  )
}


const mapStateToProps = state => ({
  count: state.count
})

export default connect(mapStateToProps)(Counter)