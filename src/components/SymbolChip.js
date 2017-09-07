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
  render() {
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

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SubmitActions, dispatch)
  }
}

export default connect(null, mapDispatchToProps)(SymbolChip);
