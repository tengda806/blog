import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from "mobx-react"
import store from  "./store"
import "./static/css"
import router from "./router"

ReactDOM.render(
  <Provider {...store}>
     <App />
  </Provider>,
  document.getElementById('root')
);
