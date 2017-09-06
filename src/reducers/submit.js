import {
  SUBMITTING_SYMBOL,
  SUBMIT_ERROR
} from '../actions/submit';



const initialState = {
  inProgress: false,
  errorMessage: null
};

export default function submit(state = initialState, action) {
  switch(action.type) {
    case SUBMITTING_SYMBOL:
      return {
        ...state,
        inProgress: action.payload.inProgress
      }

    case SUBMIT_ERROR:
      return {
        ...state,
        errorMessage: action.payload.errorMessage
      }

    default:
      return state;
  }
}
