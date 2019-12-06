import React from 'react';
import './css/App.css';
import { Theme, RootState, AppProps } from '../types';
import Header from './Header';
import Routing from './Routing';
import { connect } from 'react-redux';
import alertActions from '../actions/alert'

class App extends React.Component<AppProps> {

  render() {
    const { alert } = this.props
    return (
      <div>
        <Header theme={this.props.theme}/>
        <div className="container">
          <div className="col-sm col-sm-offset-2">
            {alert.message && <div className={`alert ${alert.type}`}>{alert.message}</div>}
          </div>
        </div>
        <Routing theme={this.props.theme}/>
      </div>
    );
  }
}

function mapState(state:RootState) {
  const { alert } = state;
  return { alert };
}

const actionCreators = {
  clearAlerts: alertActions.clear
};

const connectedApp = connect(mapState, actionCreators)(App);
export { connectedApp as App };
