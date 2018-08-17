import React from 'react';
import { Route, Switch } from 'react-router';
import HomePage from './HomeLoadable';
import OtherPage from './OtherLoadable';

export default class App extends React.PureComponent {
  render() {
    console.log('App');
    return (
      <Switch>
        <Route
          path='/'
          exact={true}
          component={HomePage}
        />
        <Route
          path='/other'
          exact={true}
          component={OtherPage}
        />
      </Switch>
    );
  }
}