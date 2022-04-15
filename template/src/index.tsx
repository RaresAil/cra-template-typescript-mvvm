import ReactDOM from 'react-dom/client';
import { Provider } from 'mobx-react';
import React from 'react';

import reportWebVitals from './reportWebVitals';
import { Header, Home } from './app/providers';
import Models from './app/models';
import './index.css';

const models = new Models();

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider {...models.getStores()}>
      {/**
       * All of the components must be inside Provider
       */}
      <Header />
      <Home />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
