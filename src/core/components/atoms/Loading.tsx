import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants';

const Loading: React.SFC = () => (
  <View style={styles.loadingContainer}>
    <Text style={styles.loadingText}>Loading...</Text>
  </View>
);

const styles = StyleSheet.create({
  loadingContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  loadingText: {
    color: COLORS.textPrimary,
  },
});

export default Loading;
