import React from 'react';
import { User } from './UsersPage';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import Card from '@core/components/atoms/Card';
import CardContent from '@core/components/atoms/CardContent';
import { View, Text } from 'react-native';
import NavigationButton from '@core/components/atoms/NavigationButton';
import { FONT_SIZES, COLORS } from '../constants';

class ProfilePage extends React.Component<NavigationInjectedProps> {
  static navigationOptions = ({ navigation }) => {
    return {
      title: navigation.getParam('user').username,
    };
  };

  render() {
    const user: User = this.props.navigation.getParam('user');
    return (
      <Page>
        <Card height={300}>
          <View style={{ flex: 1, paddingBottom: 30 }}>
            <View style={{ flex: 1, alignItems: 'center', marginBottom: 20 }}>
              <Text
                style={{
                  fontSize: FONT_SIZES.title,
                  color: COLORS.textPrimary,
                  fontWeight: '500',
                  marginTop: 20,
                  marginBottom: 8,
                }}
              >
                {user.name}
              </Text>
              <Text style={{ fontSize: 15, color: COLORS.pink }}>
                {user.email}
              </Text>
            </View>
            <View style={{ flex: 1, paddingLeft: 50, paddingRight: 50 }}>
              <CardContent primary={user.phone} secondary="Phone" center />
              <CardContent primary={user.website} secondary="Website" center />
            </View>
          </View>
        </Card>

        <NavigationButton
          onPress={() => this.props.navigation.navigate('Address', { user })}
          color={COLORS.pink}
          text={'Address'}
        />

        <NavigationButton
          onPress={() => this.props.navigation.navigate('Posts', { user })}
          color={COLORS.pinkPurple}
          text={'Posts'}
        />

        <NavigationButton
          onPress={() => this.props.navigation.navigate('Albums', { user })}
          color={COLORS.purplePink}
          text={'Albums'}
        />

        <NavigationButton
          onPress={() => this.props.navigation.navigate('Todos', { user })}
          text={'Todos'}
        />
      </Page>
    );
  }
}

export default ProfilePage;
