import React from 'react';

import Chip from 'material-ui/Chip';



const styles = {
  chip: {
    marginRight: '10px'
  }
}

class SymbolChip extends React.Component {
  render() {
    const text = this.props.text.toUpperCase();

    return(
      <Chip
        style={styles.chip}
        onRequestDelete={() => console.log(text)}
      >
        {text}
      </Chip>
    )
  }
}

export default SymbolChip;
