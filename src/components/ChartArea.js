import React from 'react';

import { CardText } from 'material-ui/Card';



const styles = {
  chart: {
    height: '30em',
    border: '3px dashed #999',
    boxSizing: 'border-box'
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
          <div style={styles.chart}>Chart Area</div>
        </CardText>
      </div>
    )
  }
}

export default ChartArea;
