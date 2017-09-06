import firebase from '../firebase';



export const FETCHING_SYMBOLS = 'FETCHING_SYMBOLS';
export const STORE_FETCHED_SYMBOLS = 'STORE_FETCHED_SYMBOLS';
export const FETCHING_DATA = 'FETCHING_DATA';
export const STORE_CHART_DATA = 'STORE_CHART_DATA';

export function symbolListListener() {
  return function(dispatch) {
    dispatch(fetchingSymbols(true));

    firebase.database().ref('/charting-app/list').on('value', snapshot => {
      if (snapshot.val()) {
        const obj = snapshot.val();
        const symbols = Object.keys(obj).reduce((acc, key) => {
          if (obj[key] !== true) {
            acc.push(obj[key]);
          }

          return acc;
        }, []);

        dispatch(storeFetchedSymbols(symbols));
      }

      dispatch(fetchingSymbols(false));

    }, error => {
      console.log('Something went wrong with the database listener!', error)
      dispatch(fetchingSymbols(false));
    });
  }
}

export function fetchData(symbol, interval = 'daily') {
  return function(dispatch) {
    dispatch(fetchingData(true));

    const url = `https://freecodecamp-start.glitch.me/api/fetch/${symbol}/${interval}`;

    fetch(url)
      .then((response) => {
        response.json()
          .then(data => {
            dispatch(storeChartData(symbol, data));
            dispatch(fetchingData(false));
          })
      })
      .catch(error => {
        console.log(`Error when fetching data for ${symbol}.`)
        dispatch(fetchingData(true));
      })
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

export function fetchingData(inProgress) {
  return {
    type: FETCHING_DATA,
    payload: {
      inProgress
    }
  }
}

export function storeChartData(symbol, chartData) {
  return {
    type: STORE_CHART_DATA,
    payload: {
      symbol,
      chartData
    }
  }
}
