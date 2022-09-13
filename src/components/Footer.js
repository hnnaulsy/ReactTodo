import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.actions'

class Footer extends Component {
  render() {
		let taskLen = this.props.todos.filter(todo=>!todo.isCompleted).length
    return (
      <footer className="footer">
				<span className="todo-count">
					<strong>{taskLen}</strong> item left
				</span>
				<ul className="filters">
					<li>
						<span>All</span>
					</li>
					<li>
						<span>Active</span>
					</li>
					<li>
						<span>Completed</span>
					</li>
				</ul>
				<button className="clear-completed">Clear completed</button>
			</footer>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Footer)