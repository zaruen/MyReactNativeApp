import React from 'react';
import { FlatList } from 'react-native';
import Axios from 'axios';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import ButtonCard from '@core/components/molecules/ButtonCard';
import { User } from './UsersPage';
import { Post } from './PostPage';
import Loading from '@core/components/atoms/Loading';

interface State {
  user: User;
  posts: Post[];
}

class PostsPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    user: this.props.navigation.getParam('user'),
    posts: [],
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s posts`,
    };
  };

  async componentWillMount() {
    const url = `https://jsonplaceholder.typicode.com/posts?userId=${
      this.state.user.id
    }`;
    const result = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      posts: result.data,
    });
  }

  renderItem = ({ item }) => {
    return (
      <ButtonCard
        onPress={() =>
          this.props.navigation.navigate('Post', {
            user: this.state.user,
            post: item,
          })
        }
        title={item.title}
        text={item.body}
        card
      />
    );
  };

  render() {
    return (
      <Page>
        {this.state.posts.length > 0 ? (
          <FlatList
            data={this.state.posts}
            keyExtractor={(item) => `${item.id}`}
            renderItem={this.renderItem}
          />
        ) : (
          <Loading />
        )}
      </Page>
    );
  }
}

export default PostsPage;
