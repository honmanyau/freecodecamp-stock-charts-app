import React from 'react';
import { connect } from 'react-redux';

import { CardText } from 'material-ui/Card';
import Chip from 'material-ui/Chip';
import TextField from 'material-ui/TextField';

import SymbolChip from './SymbolChip';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap'
  },
}

class ChipContainer extends React.Component {
  render() {
    const fetch = this.props.fetch;
    let symbolChips = null;

    if (fetch.inProgress) {
      symbolChips = 'Meows are fetching symbols for you!';
    }
    else if (!fetch.inProgress && fetch.symbols.length > 0) {
      symbolChips = fetch.symbols.map((symbol, index) => <SymbolChip key={index} text={symbol} />);
    }
    else {
      symbolChips = 'Looks like there are no symbols yet!';
    }

    return(
      <CardText style={styles.container}>
        {symbolChips}
      </CardText>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    fetch: state.fetch
  }
};

export default connect(mapStateToProps, null)(ChipContainer);
