import React, { Component } from 'react'
import axios from 'axios'

class App extends Component {

  constructor() {
    super()
    this.state = {
      msg: ''
    }
  }

  render() {
    return (
      <div>
        当前数据为：{this.state.msg}
      </div>
    )
  }

  async componentDidMount() {
    const data = await axios.get("http://localhost:3005/api/welcome").then(res => res.data)
    this.setState(data)
  }

}

export default App
