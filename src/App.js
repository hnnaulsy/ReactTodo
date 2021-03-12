import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as personActions from './store/Actions/person.actions'
/**
 */

class App extends Component {

  handler = () => {
    this.props.getPersons()
  }
  render() {
    console.log(this.props)
    return (
      <div>
        <button onClick={this.handler}>获取数据</button>
      </div>
    )
  }
}

// 获取 store 中的数据
const mapStateToProps = (state) => {
  return {
    person: state.personReducer.person
  }
}

// 自动生成触发 actions 的函数
const mapActionsToProps = (dispatch) => {
  return {
    ...bindActionCreators(personActions, dispatch)
  }
}


export default connect(mapStateToProps, mapActionsToProps)(App)

