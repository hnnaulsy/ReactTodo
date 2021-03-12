import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux'

function reducer(state, action) {
  console.log(action, 111111)
  return state
}

// 当前定义一个中间件函数
function middle({ getState, dispatch }) {
  return function (next) {
    return function (action) {
      // 此处就可以完成自己的异步操作
      setTimeout(() => {
        // 此处如果我们需要操作一些数据，然后往后面传递，那么就可以通过属性交给 action 
        action.payLoad = 100
        // 在此处的异步操作执行完成之后，还是需要将 action 将给 store 继续往后传递
        return next(action)
      }, 1500)
    }
  }
}

const store = createStore(reducer, applyMiddleware(middle))

store.dispatch({ type: 'test' })

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

