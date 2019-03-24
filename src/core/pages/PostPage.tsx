import React from 'react';
import { FlatList, Text, StyleSheet, View } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import Axios from 'axios';
import Loading from '@core/components/atoms/Loading';
import { User } from './UsersPage';
import { BASE_URL, COLORS, FONT_SIZES } from '../constants';
import ListHeader from '@core/components/atoms/ListHeader';

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
    const url = `${BASE_URL}comments?postId=${this.state.post.id}`;

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
      <View style={styles.commentContainer}>
        <Text style={[styles.comment, { fontWeight: 'bold' }]}>
          {item.name}
        </Text>
        <Text style={styles.comment}>{item.body}</Text>
        <View style={styles.commentAuthorContainer}>
          <Text style={styles.commentAuthor}>{item.email}</Text>
        </View>
      </View>
    );
  };

  render() {
    return (
      <Page>
        <View style={styles.container}>
          <View
            style={{ alignItems: 'center', marginBottom: 20, marginTop: 20 }}
          >
            <Text style={styles.title}>{this.state.post.title}</Text>
          </View>
          <Text style={styles.body}>{this.state.post.body}</Text>

          {this.state.comments.length > 0 ? (
            <>
              <ListHeader title="Comments" />
              <FlatList
                data={this.state.comments}
                keyExtractor={(item) => `${item.id}`}
                renderItem={this.renderItem}
              />
            </>
          ) : (
            <Loading />
          )}
        </View>
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: FONT_SIZES.smallTitle,
    color: COLORS.textSecondary,
  },
  body: {
    fontSize: FONT_SIZES.normal,
    color: COLORS.textPrimary,
  },
  container: {
    flex: 1,
    paddingLeft: 20,
    paddingRight: 20,
  },
  commentContainer: {
    flex: 1,
    borderRadius: 10,
    backgroundColor: COLORS.secondBackground,
    padding: 20,
    marginBottom: 20,
  },
  comment: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textComment,
  },
  commentAuthorContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 8,
  },
  commentAuthor: {
    fontSize: FONT_SIZES.extraSmall,
    color: COLORS.primary.tone4,
  },
});

export default PostPage;
