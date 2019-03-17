import React from 'react';
import StorybookUIRoot from '../storybook/Storybook';
import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import WelcomePage from './WelcomePage';
// import { Button } from 'react-native';

class RootNavigator extends React.Component {
  render() {
    // Storybook
    // const StorybookPage = createStackNavigator({
    //   StorybookUIRoot: {
    //     screen: StorybookUIRoot,
    //     navigationOptions: () => ({
    //       headerStyle: {
    //         backgroundColor: '#888',
    //       },
    //       headerLeft: <Button title="Left" onPress={() => console.log('left')}/>,
    //       headerRight: <Button title="Right" onPress={() => console.log('right')}/>,
    //     }),
    //   },
    // });

    const SwitchNavigator = createSwitchNavigator(
      {
        StorybookUIRoot,
        WelcomePage,
      },
      {
        initialRouteName: 'WelcomePage',
      },
    );

    // The app container
    const App = createAppContainer(SwitchNavigator);
    return <App />;
  }
}

export default RootNavigator;
