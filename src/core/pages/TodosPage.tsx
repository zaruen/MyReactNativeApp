import React from 'react';
import { Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

class TodosPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s todos`,
    };
  };

  render() {
    return (
      <View>
        <Text>Todos</Text>
      </View>
    );
  }
}

export default TodosPage;
