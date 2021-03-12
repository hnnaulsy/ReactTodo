import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import totalReducer from './store/Reducer'
import { Provider } from 'react-redux'
import createSagaMiddleware from 'redux-saga'
import personSaga from './store/Saga/person.saga'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(totalReducer, applyMiddleware(sagaMiddleware))
sagaMiddleware.run(personSaga)

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

