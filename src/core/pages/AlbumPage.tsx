import React from 'react';
import { TouchableOpacity, Image, FlatList, Dimensions } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import { Album } from './AlbumsPage';
import Axios from 'axios';
import Loading from '@core/components/atoms/Loading';
import ListHeader from '@core/components/atoms/ListHeader';

interface State {
  album: Album;
  photos: Photo[];
}

export interface Photo {
  albumId: number;
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

class AlbumPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    album: this.props.navigation.getParam('album'),
    photos: [],
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s album`,
    };
  };

  async componentWillMount() {
    const url = `https://jsonplaceholder.typicode.com/photos?albumId=${
      this.state.album.id
    }`;
    const result = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      photos: result.data,
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
        <Image
          source={{ uri: item.thumbnailUrl }}
          style={{
            flex: 1,
            width: Dimensions.get('screen').width / 3,
            height: Dimensions.get('screen').width / 3,
          }}
          resizeMode="contain"
        />
        {/* <Text>{item.title}</Text> */}
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Page>
        {this.state.photos.length > 0 ? (
          <>
            <ListHeader title={this.state.album.title} />
            <FlatList
              data={this.state.photos}
              keyExtractor={(item) => `${item.id}`}
              renderItem={this.renderItem}
              numColumns={3}
            />
          </>
        ) : (
          <Loading />
        )}
      </Page>
    );
  }
}

export default AlbumPage;
