import React, { Component } from 'react'

class Main extends Component {
  render() {
    return (
      <section className="main">
        <input className="toggle-all" type="checkbox" />
        <ul className="todo-list">

          <li className="completed">
            <div className="view">
              <input className="toggle" type="checkbox" checked />
              <label>品味JavaScript</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Create a TodoMVC template" />
          </li>
          <li>
            <div className="view">
              <input className="toggle" type="checkbox" />
              <label>买一个宠物</label>
              <button className="destroy"></button>
            </div>
            <input className="edit" value="Rule the web" />
          </li>
        </ul>
      </section>
    )
  }
}

export default Main

