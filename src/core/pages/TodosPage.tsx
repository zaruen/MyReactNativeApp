import React from 'react';
import { SectionList } from 'react-native';
import { NavigationInjectedProps } from 'react-navigation';
import Axios from 'axios';
import Page from '@core/components/atoms/Page';
import { User } from './UsersPage';
import ButtonCard from '@core/components/molecules/ButtonCard';
import { BASE_URL, COLORS } from '../constants';
import Loading from '@core/components/atoms/Loading';
import ListHeader from '@core/components/atoms/ListHeader';

interface State {
  todo: Todo[];
  done: Todo[];
  user: User;
}

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

class TodosPage extends React.Component<NavigationInjectedProps, State> {
  state = {
    todo: [],
    done: [],
    user: this.props.navigation.getParam('user'),
  };

  static navigationOptions = ({ navigation }) => {
    return {
      title: `${navigation.getParam('user').username}'s todos`,
    };
  };

  async componentWillMount() {
    const url = `${BASE_URL}todos?userId=${this.state.user.id}`;
    const todos = await Axios({
      method: 'GET',
      url,
    });

    this.setState({
      todo: todos.data.filter((t) => !t.completed),
      done: todos.data.filter((t) => t.completed),
    });
  }

  renderItem = ({ item }) => (
    <ButtonCard
      color={item.completed ? 'none' : COLORS.pink}
      title={item.title}
    />
  );

  renderSectionHeader = (title) => <ListHeader title={title} />;

  render() {
    return (
      <Page>
        {this.state.todo.length > 0 ? (
          <SectionList
            renderItem={this.renderItem}
            renderSectionHeader={({ section: { title } }) =>
              this.renderSectionHeader(title)
            }
            sections={[
              { title: 'Todo', data: this.state.todo },
              { title: 'Done', data: this.state.done },
            ]}
            keyExtractor={(item, index) => item + index}
          />
        ) : (
          <Loading />
        )}
      </Page>
    );
  }
}

export default TodosPage;
