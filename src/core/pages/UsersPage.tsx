import React from 'react';
import { StyleSheet, FlatList, Button, Dimensions } from 'react-native';
import Axios from 'axios';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import CardContent from '@core/components/atoms/CardContent';
import NavigationButton from '@core/components/atoms/NavigationButton';

interface State {
  users: User[];
}
export interface User {
  id: string;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: Address;
  company: Company;
}

export interface Address {
  street: string;
  suite: string;
  city: string;
  zipcode: string;
  geo: {
    lat: string;
    lng: string;
  };
}

export interface Company {
  name: string;
  catchPhrase: string;
  bs: string;
}

class UsersPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    users: [],
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: 'Users',
      headerLeft: (
        <Button
          title="Storybook"
          onPress={() => navigation.navigate('StorybookPage')}
        />
      ),
    };
  };

  async componentWillMount() {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const users = await Axios({
      method: 'GET',
      url,
    });
    console.log(Dimensions.get('screen').width / 3);
    console.log(Dimensions.get('window').width);
    this.setState({
      users: users.data,
    });
  }

  onUserPressed(user: User) {
    this.props.navigation.navigate('Profile', { user });
  }

  renderItem = ({ item }) => {
    return (
      <NavigationButton onPress={() => item && this.onUserPressed(item)}>
        <CardContent primary={item.username} secondary={item.name} />
      </NavigationButton>
    );
  };

  render() {
    return (
      <Page>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => `${item.id}`}
          renderItem={this.renderItem}
          style={styles.listContainer}
        />
      </Page>
    );
  }
}
const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 20,
  },
});

export default UsersPage;
