import { Provider } from 'mobx-react';
import ReactDOM from 'react-dom';
import React from 'react';

import reportWebVitals from './reportWebVitals';
import { Header, Home } from './app/providers';
import Models from './app/models';
import './index.css';

const models = new Models();

ReactDOM.render(
  <React.StrictMode>
    <Provider {...models.getStores()}>
      {/**
       * All of the components must be inside Provider
       */}
      <Header />
      <Home />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
