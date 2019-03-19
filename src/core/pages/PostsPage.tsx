import React from 'react';
import { Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

class PostsPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s posts`,
    };
  };

  render() {
    return (
      <View>
        <Text>Posts</Text>
      </View>
    );
  }
}

export default PostsPage;
