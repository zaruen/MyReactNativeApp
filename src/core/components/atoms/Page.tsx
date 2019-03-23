import React from 'react';
import { View, StyleSheet } from 'react-native';

const Page: React.SFC = ({ children }) => (
  <View style={styles.view}>{children}</View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#3e486c',
  },
});

export default Page;
