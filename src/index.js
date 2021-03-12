import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import totalReducer from './store/Reducers'

const store = createStore(totalReducer)
console.log(store.getState())

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store} ><App /></Provider >
  </React.StrictMode>,
  document.getElementById('root')
);

