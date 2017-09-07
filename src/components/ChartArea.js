import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as FetchActions from '../actions/fetch';

import { CardText } from 'material-ui/Card';

import StockChart from './StockChart';



const styles = {
  chart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '30em'
  },
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
          <div style={styles.chart}><StockChart type="bar" /></div>
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
