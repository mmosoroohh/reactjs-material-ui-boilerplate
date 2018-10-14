import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import Drawer from '@material-ui/core/Drawer';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Icon from '@material-ui/core/Icon';
import { Link } from 'react-router-dom';
import { mainListItems, secondaryListItems } from './listItems';

class Sidebar extends Component {
  constructor(props) {
    super(props);
  }
  static propTypes = {
    classes: PropTypes.object.isRequired,
    open: PropTypes.bool.isRequired,
    handleDrawerClose: PropTypes.func.isRequired,
    handleDrawerOpen: PropTypes.func.isRequired,
    routes: PropTypes.array.isRequired
  };
  activeRoute = routeName => {
    return window.location.pathname.indexOf(routeName) > -1 ? true : false;
  };
  render() {
    const {
      classes,
      open,
      handleDrawerClose,
      handleDrawerOpen,
      routes
    } = this.props;
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
          {routes.map((route, index) => {
            let listClasses = classNames({
              'active-btn': this.activeRoute(route.path)
            });
            console.warn(listClasses, this.activeRoute(route.path))
            return (
              <Link to={route.path} key={index}>
                <ListItem
                  button
                  className={listClasses}
                  selected={this.activeRoute(route.path)}
                >
                  <ListItemIcon>
                    <Icon className={classes.icon} color={route.color}>
                      {route.icon}
                    </Icon>
                  </ListItemIcon>
                  <ListItemText primary={route.name} />
                </ListItem>
              </Link>
            );
          })}
        </List>
      </Drawer>
    );
  }
}

export default Sidebar;
