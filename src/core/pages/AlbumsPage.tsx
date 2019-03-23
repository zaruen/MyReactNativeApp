import React from 'react';
import { FlatList, StyleSheet } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Axios from 'axios';
import Page from '@core/components/atoms/Page';
import { User } from './UsersPage';
import Loading from '@core/components/atoms/Loading';
import ButtonCard from '@core/components/molecules/ButtonCard';
import { BASE_URL } from '../constants';

export interface Album {
  userId: number;
  id: number;
  title: string;
}

interface State {
  albums: Album[];
  user: User;
}

class AlbumsPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    albums: [],
    user: this.props.navigation.getParam('user'),
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s albums`,
    };
  };

  async componentWillMount() {
    const userId = this.props.navigation.getParam('user').id;
    const url = `${BASE_URL}albums?userId=${userId}`;
    const albums = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      albums: albums.data,
    });
  }

  renderItem = ({ item }) => {
    return (
      <ButtonCard
        onPress={() =>
          this.props.navigation.navigate('Album', {
            album: item,
            user: this.state.user,
          })
        }
        title={item.title}
      />
    );
  };

  render() {
    return (
      <Page>
        {this.state.albums.length > 0 ? (
          <FlatList
            data={this.state.albums}
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

export default AlbumsPage;
