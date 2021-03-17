import React, { Component } from 'react'
import { createHashHistory } from 'history'


class Detail extends Component {
  render(props) {
    console.log(this.props.match.params.id)
    return (
      <div>
        <p>{this.props.match.params.id}</p>
        <button onClick={() => { createHashHistory().push('/home') }}>点击跳转至首页</button>
      </div>
    )
  }
}

export default Detail
