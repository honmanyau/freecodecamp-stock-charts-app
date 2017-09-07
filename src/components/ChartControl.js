import React from 'react';
import { connect } from 'react-redux';

import { RadioButton, RadioButtonGroup } from 'material-ui/RadioButton';

import StockChart from './StockChart';




const styles = {
  controls: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
  radio: {
    width: '70px'
  },
  radioInput: {
    marginRight: '8px'
  },
  chart: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    height: '30em'
  }
};

class ChartControl extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      period: 365
    };
  }

  render() {
    const controls = !this.props.fetch.inProgress && this.props.fetch.chartData ?
      <div>
        <RadioButtonGroup style={styles.controls} name="period" defaultSelected="365" onChange={(event, value) => this.setState({period: value})}>
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="30"
            label="1m"
          />
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="90"
            label="3m"
          />
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="180"
            label="6m"
          />
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="365"
            label="1y"
          />
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="1095"
            label="3y"
          />
          <RadioButton
            style={styles.radio}
            iconStyle={styles.radioInput}
            value="1825"
            label="5y"
          />
        </RadioButtonGroup>
      </div>
      :
      null;

    return(
      <div style={styles.chart}>
        {controls}
        <StockChart period={this.state.period} />
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch
  }
}

export default connect(mapStateToProps, null)(ChartControl);
