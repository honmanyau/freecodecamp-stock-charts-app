import React from 'react';

import { CardText } from 'material-ui/Card';
import TextField from 'material-ui/TextField';



const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    padding: '0'
  },
  input: {
    textAlign: 'center'
  },
  hint: {
    width: '100%',
    textAlign: 'center'
  }
}

class SearchArea extends React.Component {
  render() {
    return(
      <CardText style={styles.container}>
        <TextField
          inputStyle={styles.input}
          hintStyle={styles.hint}
          hintText="MEOW"
        />
      </CardText>
    )
  }
}

export default SearchArea;
