import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import { mainListItems, secondaryListItems } from './listItems';

class Sidebar extends Component {
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired
  };
  render() {
    const { classes, open, handleDrawerClose, handleDrawerOpen } = this.props;
    return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classNames(
            classes.drawerPaper,
            !open && classes.drawerPaperClose
          )
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List onMouseEnter={handleDrawerOpen} onMouseLeave={handleDrawerClose}>
          {mainListItems}
        </List>
        <Divider />
        <List>{secondaryListItems}</List>
      </Drawer>
    );
  }
}

export default Sidebar;
