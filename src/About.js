import React, { Component, PureComponent } from 'react'

class About extends PureComponent {
  constructor() {
    super()
    this.state = {
      count: 10
    }
  }
  handler = () => {
    this.setState({
      count: this.state.count + 5
    })
  }
  render() {
    console.log('about组件执行了render')
    return (
      <div>
        <hr />
        <p>这是About组件内容</p>
        <span>{this.state.count}</span>
        <button onClick={this.handler}>点击</button>
      </div>
    )
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   if (nextState.count === this.state.count) {
  //     return false
  //   }
  //   return true
  // }
}

export default About

