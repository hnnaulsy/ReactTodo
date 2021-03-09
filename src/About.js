import React, { PureComponent } from 'react'

class About extends PureComponent {
  render() {
    return (
      <div>
        <hr />
        <p>这是About组件内容</p>
      </div>
    )
  }

  foo = () => {
    console.log('about组件中的click操作发生了')
  }

  componentDidMount() {
    // 当 about 组件挂载完成之后就可以执行 DOM 相关的操作，例如我们此时添加事件监听
    window.addEventListener('click', this.foo)
  }

  // 当前方法会在组件卸载之前执行
  componentWillUnmount() {
    window.removeEventListener('click', this.foo)
  }

}

export default About

