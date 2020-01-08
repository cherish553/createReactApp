import React, { Component } from 'react';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  RouteComponentProps,
  withRouter
} from 'react-router-dom';
import './App.scss';

import Home from 'test/home';
import Detail from '@test/detail';
import child from 'test/child';
export default class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/home"
            component={() => (
              <Home>
                <Route exact path="/home/child" component={child} />
              </Home>
            )}
          />
          <Route exact path="/detail" component={Detail} />
          <Redirect from="*" to="/home" />
        </Switch>
      </BrowserRouter>
    );
  }
}
