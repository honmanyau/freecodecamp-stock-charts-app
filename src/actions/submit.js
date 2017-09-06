export const SUBMITTING_SYMBOL = 'SUBMITTING_SYMBOL';
export const SUBMIT_ERROR = 'SUBMIT_ERROR';

export function submitSymbol(symbol) {
  return function(dispatch) {
    dispatch(submittingSymbol(true));

    if (symbol.length < 6) {
      const url = 'http://freecodecamp-start.glitch.me/api/submit/' + symbol.toUpperCase();

      fetch(url)
        .then((response) => {
          response.json()
            .then(data => {
              if (data.exist) {
                dispatch(submitError('The symbol already exist.'));
              }
              else if (data.error) {
                dispatch(submitError('The symbol entered is not valid.'))
              }
              else {
                dispatch(submitError(null));
              }

              dispatch(submittingSymbol(false));
            })
        })
        .catch(error => {
          dispatch(submittingSymbol(false));
          console.log('Something went *really* wrong when submitting a symbol!')
        });
    }
  }
}

export function submittingSymbol(inProgress) {
  return {
    type: SUBMITTING_SYMBOL,
    payload: {
      inProgress
    }
  }
}

export function submitError(errorMessage) {
  return {
    type: SUBMIT_ERROR,
    payload: {
      errorMessage
    }
  }
}
