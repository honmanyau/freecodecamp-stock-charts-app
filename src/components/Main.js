import React from 'react';

import { Card } from 'material-ui/Card';

import ChartArea from './ChartArea';
import SearchArea from './SearchArea';
import ChipContainer from './ChipContainer';



class Main extends React.Component {
  render() {
    return(
      <Card>
        <ChartArea />
        <SearchArea />
        <ChipContainer />
      </Card>
    )
  }
}

export default Main;
