import React from 'react';
import StorybookUIRoot from '../storybook/Storybook';
import {
  createAppContainer,
  createSwitchNavigator,
  createStackNavigator,
} from 'react-navigation';
import UsersPage from './UsersPage';
import ProfilePage from './ProfilePage';
import { Button } from 'react-native';
import AddressPage from './AddressPage';
import AlbumsPage from './AlbumsPage';
import PostsPage from './PostsPage';
import TodosPage from './TodosPage';
import AlbumPage from './AlbumPage';
import PostPage from './PostPage';
import { COLORS } from '../constants';

class RootNavigator extends React.Component {
  render() {
    // Storybook
    const StorybookPage = createStackNavigator({
      StorybookUIRoot: {
        screen: StorybookUIRoot,
        navigationOptions: ({ navigation }) => ({
          headerLeft: (
            <Button
              title="Back to the app"
              onPress={() => navigation.navigate('Users')}
            />
          ),
        }),
      },
    });

    const MainNavigator = createStackNavigator(
      {
        Users: { screen: UsersPage },
        Profile: { screen: ProfilePage },
        Address: { screen: AddressPage },
        Albums: { screen: AlbumsPage },
        Posts: { screen: PostsPage },
        Todos: { screen: TodosPage },
        Album: { screen: AlbumPage },
        Post: { screen: PostPage },
      },
      {
        initialRouteName: 'Users',
        defaultNavigationOptions: {
          headerStyle: {
            backgroundColor: COLORS.secondBackground,
          },
          headerTitleStyle: {
            color: COLORS.white,
          },
          headerBackTitleStyle: {
            color: COLORS.primary.tone4,
          },
          headerTintColor: COLORS.primary.tone4,
        },
      },
    );

    const SwitchNavigator = createSwitchNavigator(
      {
        StorybookPage,
        MainNavigator,
      },
      {
        initialRouteName: 'MainNavigator',
      },
    );

    // The app container
    const App = createAppContainer(SwitchNavigator);
    return <App />;
  }
}

export default RootNavigator;
