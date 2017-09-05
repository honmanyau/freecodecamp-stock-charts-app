import React from 'react';

import { CardText } from 'material-ui/Card';



const styles = {
  container: {
    height: '30em',
    border: '3px dashed #999',
    boxSizing: 'border-box'
  }
};

class ChartArea extends React.Component {
  render() {
    return(
      <CardText style={styles.container}>
        Chart Area
      </CardText>
    )
  }
}

export default ChartArea;
