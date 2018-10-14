import React from 'react';
import PropTypes from 'prop-types';
import {
  Switch,
  Route,
  Redirect,
  Link,
  BrowserRouter as Router
} from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { compose } from 'recompose';
// import { mainListItems, secondaryListItems } from './listItems';
// import SimpleLineChart from './SimpleLineChart';
// import SimpleTable from './SimpleTable';
import Header from '../../components/Header';
import Sidebar from '../../components/Sidebar';
import Table from '../../components/Tables/SimpleTable';
import dashboardRoutes from '../../routes/dashboard';
import { addTodo } from '../../actions';

const drawerWidth = 240;

const switchRoutes = (
  <Switch>
    {dashboardRoutes.map((prop, key) => {
      console.log(prop)
      if (prop.redirect)
        return <Redirect from={prop.path} to={prop.to} key={key} />;
      return (
        <Route exact path={prop.path} component={prop.component} key={key} />
      );
    })}
  </Switch>
);

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    paddingRight: 24 // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: 12,
    marginRight: 36
  },
  menuButtonHidden: {
    display: 'none'
  },
  title: {
    flexGrow: 1
  },
  drawerPaper: {
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: theme.spacing.unit * 3,
    height: '100vh',
    overflow: 'auto'
  },
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  }
});

const customStyle = {
  main: {
    marginLeft: 60
  }
};

class Dashboard extends React.Component {
  state = {
    open: false
  };

  componentWillMount = () => {
    const payload = { name: 'name' };
    this.props.addTodo(payload);
    console.warn('sdfsdfsdfsdfsdf');
  };

  handleDrawerOpen = () => {
    this.setState({ open: true });
  };

  handleDrawerClose = () => {
    this.setState({ open: false });
  };

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <CssBaseline />
        <div className={classes.root}>
          <Header
            classes={classes}
            open={this.state.open}
            handleDrawerOpen={this.handleDrawerOpen}
          />
          <Sidebar
            classes={classes}
            open={this.state.open}
            handleDrawerClose={this.handleDrawerClose}
            handleDrawerOpen={this.handleDrawerOpen}
            routes={dashboardRoutes}
          />
          <main className={classes.content} style={customStyle.main}>
            <div className={classes.appBarSpacer} />
            <div className={classes.content}>{switchRoutes}</div>
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};
function mapStateToProps(state) {
  return {
    todos: state.todos
  };
}

function matchDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      addTodo
    },
    dispatch
  );
}
export default compose(
  withStyles(styles, {
    name: 'App'
  }),
  connect(
    mapStateToProps,
    matchDispatchToProps
  )
)(Dashboard);
