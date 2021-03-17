import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Home from './components/home'
import List from './components/list'
import NotFound from './components/notFound'
import Detail from './components/detail'

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
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} exact />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App

