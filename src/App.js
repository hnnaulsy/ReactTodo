import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as counterActions from './Stroe/Actions/counter.actions'
/**
 * redux-actions
 */

class App extends Component {
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.props.decrement_action}>-1</button>
        <span>{this.props.count}</span>
        <button onClick={this.props.increment_action}>+1</button>
      </div>
    )
  }
}

// 获取 store 当中的数据
const mapStateToProps = (state) => ({
  count: state.counterReducer.count
})

// 自动生成 action 的处理方法
const mapActionToProps = (dispatch) => ({
  ...bindActionCreators(counterActions, dispatch)
})

export default connect(mapStateToProps, mapActionToProps)(App)

