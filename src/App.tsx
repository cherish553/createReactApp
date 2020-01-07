import React, { Component } from 'react';
import { Switch, Route, BrowserRouter, Redirect } from 'react-router-dom';
import logo from './logo.svg';
import './App.scss';

import Index from './test/home';
import News from './test/detail';
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route
            path="/"
            component={() => (
              <Index>
                <Route exact path="/aaa" component={News} />
              </Index>
            )}
          />
          <Route exact path="/news" component={News} />
          <Redirect from="*" to="/" />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
