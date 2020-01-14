import React, { Component } from 'react';
import { connect } from 'react-redux';
import { mapStateToProps, mapDispatchToProps } from 'store';
import {
  Switch,
  Route,
  BrowserRouter,
  Redirect
  // withRouter
  // RouteComponentProps,
  // withRouter
} from 'react-router-dom';
import './App.scss';
import Home from 'test/home';
import Detail from '@test/detail';
import child from 'test/child';
import toDoList from 'toDoList';

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
          <Route exact path="/detail" component={Detail} />
          <Route exact path="/toDoList" component={toDoList} />
          <Redirect from="*" to="/toDoList" />
        </Switch>
      </BrowserRouter>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
