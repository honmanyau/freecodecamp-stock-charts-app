import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SubmitActions from '../actions/submit';
import * as FetchActions from '../actions/fetch';

import Chip from 'material-ui/Chip';



const styles = {
  chip: {
    marginRight: '10px'
  }
}

class SymbolChip extends React.Component {
  componentDidMount() {
    const chartData = this.props.fetch.chartData;
    const symbol = this.props.symbol;

    if (!chartData) {
      this.props.actions.fetchData(symbol);
    }
    else if (!chartData.hasOwnProperty(symbol)) {
      this.props.actions.fetchData(symbol);
    }
  }

  render() {
    console.log(this.props.fetch)
    const symbol = this.props.symbol;

    return(
      <Chip
        style={styles.chip}
        onRequestDelete={() => this.props.actions.deleteSymbol(this.props.symbol)}
      >
        {symbol}
      </Chip>
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
    actions: bindActionCreators({...SubmitActions, ...FetchActions}, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SymbolChip);
