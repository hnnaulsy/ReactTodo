import React from 'react';
import ReactDOM from 'react-dom';
import App from './App'
import { createStore, applyMiddleware } from 'redux'
import totalReducer from './store/Reducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'

const store = createStore(totalReducer, applyMiddleware(thunk))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}><App /></Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

