import React from 'react';
import './css/App.css';
import { RootState, AppProps } from '../types';
import Header from './Header';
import Routing from './Routing';
import { connect } from 'react-redux';
import alertActions from '../actions/alert';
import { history } from '../_helpers/history';

class App extends React.Component<AppProps> {

  constructor(props:AppProps) {
    super(props)

    history.listen((location, action) => {
      // clear alert on location change
      this.props.clearAlerts();
    });
  }

  render() {
    const { alert } = this.props
    return (
      <div>
        <Header theme={this.props.theme}/>
        <div className="container">
          <div className="col-sm col-sm-offset-2 text-sm-center">
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
