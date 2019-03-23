import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS } from '../../constants';

interface Props {
  title: string;
}

const ListHeader: React.SFC<Props> = ({ title }) => (
  <View style={styles.titleContainer}>
    <Text style={styles.text}>{title}</Text>
  </View>
);

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 8,
    paddingTop: 20,
  },
  text: {
    fontWeight: 'bold',
    color: COLORS.textSecondary,
  },
});

export default ListHeader;
