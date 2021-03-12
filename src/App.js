import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as contentActions from './store/Actions/Content.actions'
/**
 * 01 合并处理数据的所有 reducer 将给 store 统一管理 
 * 02 让 react 自动的创建 action 执行的函数  
 * 03 将 action 类型使用的字符串定义为常量后需直接使用有提示
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
    // this.props.dispatch({ type: 'addContent', content })
    this.props.addContent(content)

    // 自动更新界面
    this.myRef.current.value = ''
  }
  render() {
    console.log(this.props, '<------')
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
  content: state.contentReducer.content
})

const mapDispatchToProps = (dispatch) => ({
  ...bindActionCreators(contentActions, dispatch)
})
export default connect(mapStateToProps, mapDispatchToProps)(App)
