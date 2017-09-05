import React from 'react';

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
    return(
      <CardText style={styles.container}>
        <SymbolChip text="MSTL" />
        <SymbolChip text="AAPl" />
        <SymbolChip text="GOOG" />
      </CardText>
    )
  }
}

export default ChipContainer;
