import React from 'react';
import { View, StyleSheet } from 'react-native';
import { COLORS } from '../../constants';

const Page: React.SFC = ({ children }) => (
  <View style={styles.view}>{children}</View>
);

const styles = StyleSheet.create({
  view: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: COLORS.background,
  },
});

export default Page;
