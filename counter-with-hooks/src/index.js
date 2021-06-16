import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import Counter from './CounterAppUsingHooks';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <Counter/>
  </React.StrictMode>,
  document.getElementById('root')
);
