import React, { Component } from 'react'
import qs from 'qs'
import auth from '../auth'

class Home extends Component {

  login = () => {
    // 执行登录
    auth.login()
    alert('登录成功')
  }

  render() {

    return (
      <div>
        <p>Home 首页内容  {qs.parse(this.props.location.search, { ignoreQueryPrefix: true }).title}</p>
        <button onClick={this.login}>登录</button>
      </div>
    )
  }
}

export default Home
