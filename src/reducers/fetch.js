import {
  FETCHING_SYMBOLS,
  STORE_FETCHED_SYMBOLS,
  FETCHING_DATA,
  STORE_CHART_DATA
} from '../actions/fetch';



const initialState = {
  inProgress: false,
  symbols: null,
  chartData: null
};

export default function fetch(state = initialState, action) {
  switch(action.type) {
    case FETCHING_DATA:
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

    case STORE_CHART_DATA:
      return {
        ...state,
        chartData: {...state.chartData, [action.payload.symbol]: action.payload.chartData}
      }

    default:
      return state;
  }
}
