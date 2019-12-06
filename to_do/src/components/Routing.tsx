import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import {Login} from './Login';
import { Theme } from '../types';

class Routing extends Component<{theme: Theme}> {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" render={() => <Login theme={this.props.theme} />} />
          {/* <Route path="/home" component={Home} /> */}
        </Switch>
      </Router>
    );
  }
}

export default Routing;
