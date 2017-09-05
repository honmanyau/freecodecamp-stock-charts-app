import {
  FETCHING_SYMBOLS,
  STORE_FETCHED_SYMBOLS
} from '../actions/fetch';



const initialState = {
  inProgress: false,
  symbols: null
};

export default function fetch(state = initialState, action) {
  switch(action.type) {
    case FETCHING_SYMBOLS:
      return {
        ...state,
        inProgress: action.payload.inProgress
      };

    case STORE_FETCHED_SYMBOLS:
      return {
        ...state,
        symbols: action.payload.symbols
      };

    default:
      return state;
  }
}
