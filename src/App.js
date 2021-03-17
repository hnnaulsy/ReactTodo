import React, { Component } from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import AuthRouteGuard from './guard'
import loadComponent from '@loadable/component'

const Home = loadComponent(() => import('./components/home'))
const List = loadComponent(() => import('./components/list'))
const NotFound = loadComponent(() => import('./components/notFound'))
const Detail = loadComponent(() => import('./components/detail'))

/**
 * @loadable/component 
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
            <AuthRouteGuard path="/list" component={List} />
            <Route path="/detail/:id" component={Detail} />
            <Route component={NotFound} />
          </Switch>
        </div>
      </div>
    )
  }
}

export default App

