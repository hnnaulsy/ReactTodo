import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'

/**
 *  react-router-dom 
 * 
 * HashRouter： 开启路由 
 * Link：to 属性指定跳转的链接 
 * Route: path component 
 */
class App extends Component {
  render() {
    return (
      <div>
        <div>
          <Link to="/home">首页</Link>---
          <Link to="/list">列表页</Link>
        </div>
        <div>
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
        </div>
      </div>
    )
  }
}

export default App

