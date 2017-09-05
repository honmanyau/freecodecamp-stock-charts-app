import React from 'react';

import AppBar from 'material-ui/AppBar';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';



class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      drawerOpened: false
    };
  }

  render() {
    return(
      <div>
        <AppBar title="Start" onLeftIconButtonTouchTap={() => this.setState({drawerOpened: !this.state.drawerOpened})} />
        <Drawer
          docked={false}
          width={220}
          open={this.state.drawerOpened}
          onRequestChange={drawerOpened => this.setState({drawerOpened})}
        >
          <MenuItem onClick={() => window.open('https://github.com/honmanyau/freecodecamp-stock-charts-app')}>GitHub Repository</MenuItem>
        </Drawer>
      </div>
    )
  }
}

export default Header;
