import React, { Component } from 'react'
import { createHashHistory } from 'history'
import Test from './test'


class Detail extends Component {
  render() {
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <button onClick={() => { createHashHistory().push('/home') }}>点击跳转至首页</button>
        <Test />
      </div>
    )
  }
}

export default Detail
