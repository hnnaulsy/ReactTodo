import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import * as todoActions from '../store/actions/todo.actions'

class Main extends Component {
  componentDidMount() {
    this.props.load_todo()
  }
  render() {
    console.log(this.props)
    return (
			<section className="main">
				<input className="toggle-all" type="checkbox" />
				<ul className="todo-list">
          { this.props.todos.map(item=>(
            <li key={item.id}>
              <div className="view">
                <input className="toggle" type="checkbox"/>
                <label>{item.taskName}</label>
                <button className="destroy"></button>
              </div>
              <input className="edit"/>
					</li>
          )) }
				</ul>
			</section>
    )
  }
}

const mapStateToProps = (state) => ({
  todos: state.todoReducer.todos
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(todoActions,dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(Main)
