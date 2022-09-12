import React from 'react';
import ReactDOM from 'react-dom';
import { Provider as StoreProvider } from 'react-redux'

import App from './App';
import reportWebVitals from './reportWebVitals';
import Providers from './Providers'
import GlobalStyle from './style/Global';
import { store } from './store'

ReactDOM.render(
  <StoreProvider store={store}>
    <Providers>
      <GlobalStyle />
      <App />
    </Providers>
  </StoreProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();