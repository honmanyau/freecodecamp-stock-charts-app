import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import reducer from './reducers';


function tempReducer(state = 0, action) {
  switch(action.type) {
    case 'MEOW':
      return state + 1;

    default:
      return state;
  }
}


const store = createStore(
  tempReducer,
  applyMiddleware(thunk)
);

console.log(store.getState());

export default store;
