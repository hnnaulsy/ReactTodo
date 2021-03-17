import React, { Component } from 'react'
import qs from 'qs'
import { Redirect } from 'react-router-dom'


class Home extends Component {
  render(props) {
    // console.log(this.props.location.search)
    // console.log(qs.parse(this.props.location.search, { ignoreQueryPrefix: true }))

    const isLogin = false

    if (!isLogin) {
      return <Redirect to="/list" />
    }

    return (
      <div>Home 首页内容  {qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).title}</div>
    )
  }
}

export default Home
