import React from 'react';

import { CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0'
  },
  input: {
    textAlign: 'center'
  },
  hint: {
    width: '100%',
    textAlign: 'center'
  }
}

class SearchArea extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      symbol: ''
    };
  }

  handleSymbolSubmission(event) {
    if (event.key === 'Enter') {
      const symbol = this.state.symbol;
      const apiUrl = `https://freecodecamp-start.glitch.me/api/aa/${symbol}/daily`;

      // this.props.actions.submitSymbol(symbol);
    }
  }

  render() {
    return(
      <CardText style={styles.container}>
        <TextField
          inputStyle={styles.input}
          hintStyle={styles.hint}
          value={this.state.symbol}
          hintText="MEOW"
          onChange={event => this.setState({symbol: event.target.value})}
          onKeyPress={event => this.handleSymbolSubmission(event)}
        />
      </CardText>
    )
  }
}

export default SearchArea;
