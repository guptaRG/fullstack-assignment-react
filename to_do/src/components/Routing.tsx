import React, { Component } from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Theme } from '../types';
import { Home } from './Home';
import { history } from "../_helpers/history";
import { Signup } from './Signup';

export const URLS = {
  LOGIN: "/",
  SIGNUP: "/signup",
  HOME: "/home"
}

class Routing extends Component<{theme: Theme}> {
  render() {
    return (
      <Router history={ history }>
        <Switch>
          <Route exact path={ URLS.LOGIN } render={() => <Login theme={this.props.theme} />} />
          <Route path={ URLS.HOME } render={() => <Home theme={this.props.theme} />} />
          <Route path={ URLS.SIGNUP } render={() => <Signup theme={this.props.theme} />} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
