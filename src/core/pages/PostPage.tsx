import React from 'react';
import { TouchableOpacity, FlatList, Text } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import Axios from 'axios';
import Loading from '@core/components/atoms/Loading';
import { User } from './UsersPage';

interface State {
  post: Post;
  comments: Comment[];
  user: User;
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface Comment {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

class PostPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    post: this.props.navigation.getParam('post'),
    user: this.props.navigation.getParam('user'),
    comments: [],
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s post`,
    };
  };

  async componentWillMount() {
    const url = `https://jsonplaceholder.typicode.com/comments?postId=${
      this.state.post.id
    }`;

    const result = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      comments: result.data,
    });
  }

  renderItem = ({ item, index }) => {
    return (
      <TouchableOpacity onPress={() => {}} style={{ flex: 1 }}>
        <Text>{item.body}</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <Page>
        {this.state.comments.length > 0 ? (
          <FlatList
            data={this.state.comments}
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

export default PostPage;
