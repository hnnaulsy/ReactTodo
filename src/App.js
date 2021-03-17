import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'

/**
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
          <Route path="/" component={Home} exact />
          <Route path="/home" component={Home} />
          <Route path="/list" component={List} />
        </div>
      </div>
    )
  }
}

export default App

