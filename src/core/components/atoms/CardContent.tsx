import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { FONT_SIZES } from '../../constants';
import { COLORS } from '../../constants';

interface Props {
  primary: string;
  secondary: string;
  center?: boolean;
}

const CardContent: React.SFC<Props> = ({ primary, secondary, center }) => (
  <View
    style={[styles.container, { alignItems: center ? 'center' : 'flex-start' }]}
  >
    <Text style={styles.primary}>{primary}</Text>
    <Text style={styles.secondary} numberOfLines={1}>
      {secondary}
    </Text>
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
  },
});

export default CardContent;
