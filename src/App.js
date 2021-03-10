import React, { Component } from 'react'
import axios from 'axios'
/**
 * 01 什么是请求转发 
 * 02 react是如何实现请求转的
 *  a package.json 配置 proxy 
 *  b http-proxy-middleware 
 */

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
    const data = await axios.get("/api/welcome").then(res => res.data)
    this.setState(data)
  }

}

export default App
