import React from 'react';
import {
  View,
  StyleSheet,
  Text,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import Axios from 'axios';
import { NavigationInjectedProps } from 'react-navigation';

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

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => item && this.onUserPressed(item)}>
        <Text style={styles.item}>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.users}
          keyExtractor={(item) => `${item.id}`}
          renderItem={this.renderItem}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});

export default UsersPage;
