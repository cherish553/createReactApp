import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect,
  // withRouter
  // RouteComponentProps,
  // withRouter
} from 'react-router-dom';
import './App.scss';
import Loadable from 'util/index';

const child = Loadable(() => import('test/child'));
const Detail = Loadable(() => import('@test/detail'));
const toDoList = Loadable(() => import('toDoList'));
const Home = Loadable(() => import('test/home'));
class App extends Component {
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
          <Route
            exact
            path="/detail"
            component={Detail}
          />
          <Route
            exact
            path="/toDoList"
            component={toDoList}
          />
          <Redirect from="*" to="/toDoList" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
