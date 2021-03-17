import React, { Component } from 'react'
import { Link, Route } from 'react-router-dom'
import Outer from '../components/outer'
import Inner from '../components/inner'


class List extends Component {
  render(props) {
    console.log(this.props)
    return (
      <div>
        <div>
          <p><Link to="/detail/1">测试文章1</Link></p>
          <p><Link to="/detail/1">测试文章2</Link></p>
          <p><Link to="/detail?title='来自于list'">测试文章1</Link></p>
        </div>
        <div>
          <Link to={`${this.props.match.url}/inner`}>国内新闻</Link>
          <Link to={`${this.props.match.url}/outer`}>国际新闻</Link>
        </div>
        <Route path={`${this.props.match.path}/inner`} component={Inner} />
        <Route path={`${this.props.match.path}/outer`} component={Outer} />
      </div>
    )
  }
}

export default List
