import React from 'react';
import { View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import Card from '@core/components/atoms/Card';
import { User } from './UsersPage';
import CardContent from '@core/components/atoms/CardContent';
import CardHeader from '@core/components/atoms/CardHeader';

class AddressPage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s address`,
    };
  };

  render() {
    const user: User = this.props.navigation.getParam('user');
    const address = user.address;
    const company = user.company;
    return (
      <Page>
        <Card height={300}>
          <View style={{ flex: 1 }}>
            <CardHeader text="Address" />
            <CardContent
              title={`${address.suite}, ${address.street}, ${address.city}`}
              text="Location"
              center
            />
            <CardContent title={address.zipcode} text="Zip Code" center />
          </View>
        </Card>
        <Card height={300}>
          <View style={{ flex: 1 }}>
            <CardHeader text="Company" />
            <CardContent title={company.name} text="Name" center />
            <CardContent title={company.catchPhrase} text="Moto" center />
            <CardContent title={company.bs} text="Industry" center />
          </View>
        </Card>
      </Page>
    );
  }
}

export default AddressPage;
