import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Login } from './Login';
import { Theme } from '../types';
import { Home } from './Home';

class Routing extends Component<{theme: Theme}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login theme={this.props.theme} />} />
          <Route path="/home" render={() => <Home theme={this.props.theme} />} />
        </Switch>
      </Router>
    );
  }
}

export default Routing;
