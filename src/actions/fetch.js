import firebase from '../firebase';



export const FETCHING_SYMBOLS = 'FETCHING_SYMBOLS';
export const STORE_FETCHED_SYMBOLS = 'STORE_FETCHED_SYMBOLS';

export function symbolListListener() {
  return function(dispatch) {
    dispatch(fetchingSymbols(true));

    firebase.database().ref('/charting-app/list').on('value', snapshot => {
      if (snapshot.val()) {
        dispatch(storeFetchedSymbols(snapshot.val()));
        dispatch(fetchingSymbols(false));
      }
    }, error => console.log('Something went wrong with the database listener!', error))
  }
}

export function fetchingSymbols(inProgress) {
  return {
    type: FETCHING_SYMBOLS,
    payload: {
      inProgress
    }
  }
}

export function storeFetchedSymbols(symbols) {
  return {
    type: STORE_FETCHED_SYMBOLS,
    payload: {
      symbols
    }
  }
}
