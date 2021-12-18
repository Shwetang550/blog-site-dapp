import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import 'react-toastify/dist/ReactToastify.css';

// custom components
import App from './App';

// 3rd party components
import { BrowserRouter } from 'react-router-dom';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
