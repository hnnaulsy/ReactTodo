import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as todoActions from '../store/actions/todo.actions'
/**
 */

class Header extends Component {

  addTodo = (ev) => {
    if (ev.keyCode === 13) {

      // 01 获取当前输入框里的内容
      let taskName = ev.target.value
      if (taskName.trim().length === 0) {
        alert('请输入任务名称')
        return
      }

      // 02 触发新增任务的指令  
      this.props.add_todo(taskName)

      // 03 清空文本框
      ev.target.value = ''
    }
  }

  render() {
    return (
      <div className="header">
        <h1>todos</h1>
        <input onKeyUp={this.addTodo} className="new-todo" placeholder="还有什么任务没有完成?" />
      </div>
    )
  }
}

// 组件与store 
const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

// 组件与dispatch 
const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Header)

