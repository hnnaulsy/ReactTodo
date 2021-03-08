import React, { Component } from 'react'


class FormComponent extends Component {

  submit = (ev) => {
    ev.preventDefault()

    // 非受控组件指的就是某一个表单元素里的数据不受 react 管理
    // 可以直接从 DOM 元素本身进行获取（ 获取DOM元素， 获取具体的值 ）

    console.log(this.refs.username.value)

  }
  render() {
    return (
      <form onSubmit={this.submit}>
        <input type="text" ref="username" />
        <input type="submit" />
      </form>
    )
  }
}

export default FormComponent