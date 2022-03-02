import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route } from 'react-router-dom'
import App from './App';
import { Provider } from 'react-redux'
import store from './store/store'



ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
      {/* <Route path='/' component={App} /> */}
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);