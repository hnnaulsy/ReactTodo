import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class List extends Component {
  render() {
    return (
      <div>
        <p><Link to="/detail/1">测试文章1</Link></p>
        <p><Link to="/detail/2">测试文章2</Link></p>
        <p><Link to="/home?title=来自于list">测试文章3</Link></p>
      </div>
    )
  }
}

export default List
