import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import store from './store.js';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';



ReactDOM.render(
  <Provider store={store}>
    <MuiThemeProvider>
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    </MuiThemeProvider>
  </Provider>,
  document.getElementById('root')
);
