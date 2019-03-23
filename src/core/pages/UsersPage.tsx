import React from 'react';
import { StyleSheet, FlatList, Button } from 'react-native';
import Axios from 'axios';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import ButtonCard from '@core/components/molecules/ButtonCard';
import Loading from '@core/components/atoms/Loading';

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
    this.setState({
      users: users.data,
    });
  }

  onUserPressed(user: User) {
    this.props.navigation.navigate('Profile', { user });
  }

  renderItem = ({ item }) => {
    return (
      <ButtonCard
        onPress={() => item && this.onUserPressed(item)}
        title={item.username}
        text={item.name}
      />
    );
  };

  render() {
    return (
      <Page>
        {this.state.users.length > 0 ? (
          <FlatList
            data={this.state.users}
            keyExtractor={(item) => `${item.id}`}
            renderItem={this.renderItem}
            style={styles.listContainer}
          />
        ) : (
          <Loading />
        )}
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
