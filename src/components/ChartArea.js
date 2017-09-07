import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FetchActions from '../actions/fetch';

import { CardText } from 'material-ui/Card';

import ChartControl from './ChartControl';



const styles = {
  attribution: {
    textAlign: 'center',
    fontSize: '9pt',
    color: '#777'
  },
  link: {
    color: '#777'
  }
};

class ChartArea extends React.Component {
  render() {
    return(
      <div>
        <CardText>
          <div style={styles.attribution}>Data powered by <a style={styles.link} href="https://www.alphavantage.co">Alpha Vantage</a></div>
        </CardText>

        <CardText>
          <ChartControl />
        </CardText>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    submit: state.submit,
    fetch: state.fetch
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(FetchActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ChartArea);
