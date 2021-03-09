import React, { Component } from 'react'

/**
 * 挂载组件 
 *  组件被创建然后插入DOM 当中
 * 生命周期方法
 *  01 constructor        设置组件的初始配置
 *  02 render             解析 JSX ，在界面上展示
 *  03 componentDidMount  组件挂载完成
 *    发送网络请求  
 *    添加定义时器
 *    添加事件监听
 *    获取DOM元素 
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
    console.log(this)
  }
  render() {
    console.log('render执行了')
    return (
      <div>
        {this.state.count}
        <button onClick={this.handler}>点击</button>
      </div>
    )
  }
  componentDidMount() {
    console.log('挂载完成了')
    // setInterval(() => {
    //   this.setState({
    //     count: this.state.count + 1
    //   })
    // }, 1000)
  }
}

export default App
