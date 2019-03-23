import React from 'react';
import { Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';

class AddressPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s address`,
    };
  };

  render() {
    return (
      <Page>
        <Text>Address</Text>
      </Page>
    );
  }
}

export default AddressPage;
