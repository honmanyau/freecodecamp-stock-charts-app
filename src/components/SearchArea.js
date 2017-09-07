import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SubmitActions from '../actions/submit';

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
  },
  error: {
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
      const symbol = this.state.symbol.toUpperCase();

      this.props.actions.submitSymbol(symbol);
    }
  }

  render() {
    return(
      <CardText style={styles.container}>
        <TextField
          disabled={this.props.submit.inProgress ? true : false}
          inputStyle={styles.input}
          hintStyle={styles.hint}
          errorStyle={styles.error}
          value={this.state.symbol}
          hintText="Enter ticker symbol here"
          errorText={this.props.submit.errorMessage}
          onChange={event => this.setState({symbol: event.target.value})}
          onKeyPress={event => this.handleSymbolSubmission(event)}
        />
      </CardText>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    submit: state.submit
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SubmitActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchArea);
