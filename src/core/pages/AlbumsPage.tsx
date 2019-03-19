import React from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Axios from 'axios';

interface State {
  albums: any[];
}

class AlbumsPage extends React.Component<NavigationInjectedProps, State> {
  state = { albums: [] };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s albums`,
    };
  };

  async componentWillMount() {
    const userId = this.props.navigation.getParam('user').id;
    const url = `https://jsonplaceholder.typicode.com/albums?userId=${userId}`;
    const albums = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      albums: albums.data,
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => {}}>
        <Text style={styles.item}>{item.id}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          data={this.state.albums}
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

export default AlbumsPage;
