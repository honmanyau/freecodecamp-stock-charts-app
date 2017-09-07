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
        dispatch(fetchingSymbols(false));
        dispatch(fetchData(symbols))

      }
      else {
        dispatch(fetchingSymbols(false));
      }
    }, error => {
      console.log('Something went wrong with the database listener!', error)
      dispatch(fetchingSymbols(false));
    });
  }
}

export function fetchData(symbols, interval = 'daily') {
  return function(dispatch) {
    dispatch(fetchingData(true));

    Promise.all(symbols.map(symbol => {
      const url = `https://freecodecamp-start.glitch.me/api/fetch/${symbol}/${interval}`;

      return fetch(url).then(response => {
        if (response.ok) {
          return response.json().then(data => {return {[symbol]: data}});
        }
        else {
          return 'error';
        }
      }).catch(error => console.log('Multi fetch error.'));
    }))
      .then(data => {
        if (data.indexOf('error') < 0) {
          dispatch(storeChartData(Object.assign({}, ...data)));
          dispatch(fetchingSymbols(false));
        }
      });
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

export function storeChartData(chartData) {
  return {
    type: STORE_CHART_DATA,
    payload: {
      chartData
    }
  }
}
