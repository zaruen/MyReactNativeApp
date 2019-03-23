import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FONT_SIZES } from '../../constants';
import { COLORS } from '../../constants';

interface Props {
  title: string;
  text: string;
  center?: boolean;
}

const CardContent: React.SFC<Props> = ({ title, text, center }) => (
  <View
    style={[styles.container, { alignItems: center ? 'center' : 'flex-start' }]}
  >
    {title && <Text style={styles.primary}>{title}</Text>}
    {text && <Text style={styles.secondary}>{text}</Text>}
  </View>
);

const styles = StyleSheet.create({
  primary: {
    fontSize: FONT_SIZES.normal,
    color: COLORS.textPrimary,
  },
  secondary: {
    fontSize: FONT_SIZES.small,
    color: COLORS.textSecondary,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default CardContent;
