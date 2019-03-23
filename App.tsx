import React from 'react';
import RootNavigator from '@core/pages/RootNavigator';

export default class App extends React.Component {
  render() {
    // disable the warnings
    console.disableYellowBox = true;
    return (
      <RootNavigator />
    );
  }
}
