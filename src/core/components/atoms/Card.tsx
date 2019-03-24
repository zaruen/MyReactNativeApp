import React from 'react';
import { View, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '../../constants';

interface Props {
  height?: number;
}

const Card: React.SFC<Props> = ({ children, height }) => (
  <View style={[styles.wrapper, { maxHeight: height, minHeight: height }]}>
    <LinearGradient
      colors={[COLORS.gradientStart, COLORS.gradientStop]}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={styles.gradient}
    >
      {children}
    </LinearGradient>
  </View>
);

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
    borderRadius: 10,
  },
  wrapper: {
    flex: 1,
    alignSelf: 'stretch',
    paddingRight: 20,
    paddingLeft: 20,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    marginBottom: 12,
  },
});

export default Card;
