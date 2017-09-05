import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';



ReactDOM.render(
  <Provider store={store}>
    <div>
      Nya
    </div>
  </Provider>,
  document.getElementById('root')
);
