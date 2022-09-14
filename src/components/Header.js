import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.actions'
import { getIn } from "immutable";

class Header extends Component {
  addTodo = (ev) => {
    if(ev.keyCode===13) {
      let taskName = ev.target.value
      if(taskName.trim().length===0){
        alert("请输入用户名称")
        return
      }
      this.props.add_todo(taskName)
      ev.target.value = ''
    }
  }
  render() {
    return (
      <header className="header">
				<h1>todos</h1>
				<input onKeyUp={this.addTodo} className="new-todo" placeholder="还有什么任务没有完成?" autofocus/>
			</header>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: getIn(state.todoReducer,['todos'])
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions,dispatch)
})

export default connect(mapStateToProps,mapDispatchToProps)(Header)