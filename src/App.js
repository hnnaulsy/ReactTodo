import React, { Component } from 'react'

/**
 * 一、如何在react 中使用表单元素  
 *  受控表单 
 *    表单元素的值全部由 react 来进行管理， 此时表单元素中的值都放在 state 中， 所以表单元素里的值也需要从 state 当中进行获取 
 *  非受控表单
 *    不受 react 管理，表单元素的数据由 DOM 元素本身进行管理， 表单元素的值也是存放在 DOM 元素里，获取的时候需要操作 DOM 元素
 * 
 * 二、受控表单值绑定与数据同步 
 *  01 将 state 中的状态与表单的 value 值进行绑定 value={this.state.xxxx}
 *  02 如何更新状态值  onChange={方法}  ev.target.value
 *  03 ev.target.name === [prop]: this.setState({})
 * 
 * 三、细节
 *  01 readOnly 
 *  02 defaultValue
 */

class App extends Component {

  // 定义组件的当中的状态
  state = {
    name: 'zce',
    age: 40,
    test: 'test'
  }

  // 定义方法用于处理状态里数据值的修改
  handler = (ev) => {
    console.log(ev.target.name)
    const prop = ev.target.name
    this.setState({
      [prop]: ev.target.value
    })
  }


  render() {
    return (
      <div>
        <input name="name" value={this.state.name} onChange={this.handler.bind(this)} />
        {/* <input value={this.state.age} onChange={(ev) => { this.setState({ age: ev.target.value }) }} /> */}
        <input name="age" value={this.state.age} onChange={this.handler.bind(this)} />

        {/* <input type="text" value={this.state.test} readOnly /> */}
        <input type="text" defaultValue={this.state.test} />
      </div>
    )
  }
}


export default App
