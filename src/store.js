import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import * as FetchActions from './actions/fetch';
import reducer from './reducers';



const store = createStore(
  reducer,
  applyMiddleware(thunk)
);

store.dispatch(FetchActions.symbolListListener())

console.log(store.getState());

export default store;
