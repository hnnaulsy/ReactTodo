import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

// 3 定义初始的store 数据
const initialState = {
  content: ['默认数据']
}

// 2 创建 reducer
function reducer(state = initialState, action) {
  // state reducer 当中处理完数据之后返回给 store 进行存储的数据
  // action store 传递给 reducer 的具体指令 

  console.log(action, "<<<<<<<<<")
  switch (action.type) {
    case 'addContent':
      return {
        content: [
          ...state.content,
          action.content
        ]
      }
    default:
      return state
  }
}

// 1 创建 store 存储数据
const store = createStore(reducer)
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} ><App /></Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

