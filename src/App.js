import React, { Component } from 'react'

class App extends Component {

  // 定义状态
  state = {
    subject: 'java'
  }

  render() {
    return (
      <div>
        <select value={this.state.subject} onChange={(ev) => { this.setState({ subject: ev.target.value }) }}>
          <option value="大前端">大前端</option>
          <option value="java">java</option>
          <option value="python">python</option>
        </select>

        <hr />
        <button onClick={() => { console.log(this.state) }}>点击获取状态值</button>
      </div>
    )
  }
}


export default App
