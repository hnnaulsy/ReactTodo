import React, { Component } from 'react'
import { Redirect, Route } from 'react-router'
import auth from './auth'

export default class AuthRouteGuard extends Component {

  render() {
    const { component: Component, ...rest } = this.props
    return (
      <Route {...rest} render={props => {
        if (auth.isAuthorized()) {
          return <Component {...props} />
        } else {
          return <Redirect to="/home" />
        }
      }} />
    )
  }
}
