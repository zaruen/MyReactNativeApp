import React from 'react';
import { User } from './UsersPage';
import { NavigationInjectedProps } from 'react-navigation';
import Page from '@core/components/atoms/Page';
import Card from '@core/components/atoms/Card';
import CardContent from '@core/components/atoms/CardContent';
import { View, Text, StyleSheet } from 'react-native';
import ButtonCard from '@core/components/molecules/ButtonCard';
import { FONT_SIZES, COLORS } from '../constants';
import CardHeader from '@core/components/atoms/CardHeader';

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
          <View style={{ flex: 1 }}>
            <View
              style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <CardHeader text={user.name} />
              <Text style={styles.email}>{user.email}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <CardContent title={user.phone} text="Phone" center />
              <CardContent title={user.website} text="Website" center />
            </View>
          </View>
        </Card>

        <ButtonCard
          onPress={() => this.props.navigation.navigate('Address', { user })}
          color={COLORS.primary.tone4}
          title={'Address'}
        />

        <ButtonCard
          onPress={() => this.props.navigation.navigate('Posts', { user })}
          color={COLORS.primary.tone3}
          title={'Posts'}
        />

        <ButtonCard
          onPress={() => this.props.navigation.navigate('Albums', { user })}
          color={COLORS.primary.tone2}
          title={'Albums'}
        />

        <ButtonCard
          onPress={() => this.props.navigation.navigate('Todos', { user })}
          title={'Todos'}
        />
      </Page>
    );
  }
}

const styles = StyleSheet.create({
  email: {
    fontSize: FONT_SIZES.medium,
    color: COLORS.primary.tone4,
  },
});

export default ProfilePage;
