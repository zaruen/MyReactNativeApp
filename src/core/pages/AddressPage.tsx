import React from 'react';
import { Text, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';

class AddressPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s address`,
    };
  };

  render() {
    return (
      <View>
        <Text>Address</Text>
      </View>
    );
  }
}

export default AddressPage;
