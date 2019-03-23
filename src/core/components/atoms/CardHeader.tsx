import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { COLORS, FONT_SIZES } from '../../constants';

interface Props {
  text: string;
}

const CardHeader: React.SFC<Props> = ({ text }) => (
  <View style={styles.container}>
    <Text style={styles.title}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  title: {
    fontSize: FONT_SIZES.smallTitle,
    color: COLORS.textPrimary,
    fontWeight: '500',
    marginTop: 20,
    marginBottom: 8,
  },
});

export default CardHeader;
