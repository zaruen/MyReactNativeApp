import React from 'react';
import { Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

class AlbumsPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s albums`,
    };
  };

  render() {
    return (
      <View>
        <Text>Albums</Text>
      </View>
    );
  }
}

export default AlbumsPage;
