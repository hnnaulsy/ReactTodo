import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers/root.reducer'
import createSagaMiddleware from 'redux-saga'
import todoSaga from './saga/todo.saga'

const sagaMiddleware = createSagaMiddleware()

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(todoSaga)

export default store

/**
 * 当前模块完成 store 的创建  + 中间件注册
 */