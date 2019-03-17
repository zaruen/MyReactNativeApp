import React from 'react';
import { View, StyleSheet } from 'react-native';
import Hello from '@core/components/Hello';

class WelcomePage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Hello />
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
});

export default WelcomePage;