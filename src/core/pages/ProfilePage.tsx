import React from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { User } from './UsersPage';
import { NavigationInjectedProps } from 'react-navigation';

class ProfilePage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('user').username,
    };
  };

  render() {
    const user: User = this.props.navigation.getParam('user');
    return (
      <View>
        <Text>{user.username}</Text>
        <Text>{user.name}</Text>
        <Text>{user.email}</Text>
        <Text>{user.phone}</Text>
        <Text>{user.website}</Text>

        <Text style={{ marginTop: 20 }}>Company:</Text>
        <Text>{user.company.name}</Text>
        <Text>{user.company.catchPhrase}</Text>
        <Text>{user.company.bs}</Text>

        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Address', { user })}
        >
          <Text>{user.address.street}</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Posts', { user })}
        >
          <Text>Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Albums', { user })}
        >
          <Text>Albums</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('Todos', { user })}
        >
          <Text>Todos</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default ProfilePage;
