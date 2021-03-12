import React, { Component } from 'react'
import { connect } from 'react-redux'
/**
 * 
 * 1 创建 store 保存数据关联 reducer 
 * 2 利用 provider 将 store 向后传递 
 * 3 在具体的组当中使用 connect 方法获取 store 里保存的数据，通过组件的 Props 进行访问 
 * 4 当我们拿到数据之后就可以在界面上渲染了
 */

class App extends Component {

  constructor() {
    super()
    this.myRef = React.createRef()
  }

  handler = () => {
    // 获取 input 输入框当中的内容
    const content = this.myRef.current.value

    // 调用 dispatch 方法将输入框中的内容传给 action ，在 reducer 当中进行处理 
    this.props.dispatch({ type: 'addContent', content })

    // 自动更新界面
    this.myRef.current.value = ''
  }
  render() {
    return (
      <div>
        <input type="text" placeholder="请输入标题" ref={this.myRef} />
        <button onClick={this.handler}>新增</button>
        <ul>
          {
            this.props.content.map((item, index) => <li key={index}>{item}</li>)
          }
        </ul>
      </div>
    )
  }
}

// 从 store 当中来获取当前组件需要使用的数据
const mapStateToProps = (state) => ({
  content: state.content
})

export default connect(mapStateToProps)(App)
