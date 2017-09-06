import { combineReducers } from 'redux';

import fetch from './fetch';
import submit from './submit';



export default combineReducers({
  fetch,
  submit
});
