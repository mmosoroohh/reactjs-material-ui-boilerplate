import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './index.css';
import indexRoutes from './routes/index';
// import App from './App';
// import App from './dashboard';
// import App from './layouts/dashboard';
import * as serviceWorker from './serviceWorker';
import allReducers from './reducer';

const logger = createLogger();
const store = createStore(allReducers, applyMiddleware(logger));
ReactDOM.render(
  <Provider store={store}>
    <Router>
      <Switch>
        {indexRoutes.map((route, key) => {
          return (
            <Route path={route.path} component={route.component} key={key} />
          );
        })}
      </Switch>
    </Router>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
