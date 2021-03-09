import React, { Component } from 'react'
import About from './About'

/**
 * 什么是更新组件  
 *  01 当数据更新之后，组件就需要被重新渲染 
 *  02 外部传入的 props 以及自身管理的状态
 * 
 * 常用的方法
 *  shouldComponentUpdate(nextProps, nextState)     组件是否更新
 *    默认返回的是 true 
 *    如果此方法返回 false 那么后续的方法就不会再执行
 *  render                                          解析JSX 渲染DOM 呈现界面
 *  componentDidUpdate                              组件更新完成之后执行
 */

class App extends Component {
  constructor() {
    super()
    this.state = {
      count: 0
    }
    this.handler = this.handler.bind(this)
  }
  handler() {
    this.setState({
      count: this.state.count + 1
    })
  }
  render() {
    console.log('render执行了')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
        <About />
      </div>
    )
  }
  componentDidMount() {
    // console.log('挂载完成了')
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000)
  }
  shouldComponentUpdate(nextProps, nextState) {
    // console.log('shouldComponentUpdate执行了')
    return true
  }
}

export default App
