import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import * as SubmitActions from '../actions/submit';

import Chip from 'material-ui/Chip';



const styles = {
  chip: {
    marginRight: '10px'
  }
}

class SymbolChip extends React.Component {
  render() {
    const text = this.props.text;

    return(
      <Chip
        style={styles.chip}
        onRequestDelete={() => this.props.actions.deleteSymbol(this.props.text)}
      >
        {text}
      </Chip>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    submit: state.submit
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(SubmitActions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SymbolChip);
