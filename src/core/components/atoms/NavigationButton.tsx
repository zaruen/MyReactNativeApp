import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Card from './Card';
import { COLORS } from '../../constants';

interface Props {
  onPress?: () => void;
  color?: string;
  text?: string;
}

const NavigationButton: React.SFC<Props> = ({
  children,
  onPress,
  color,
  text,
}) => (
  <TouchableOpacity onPress={onPress} style={{ height: 75 }}>
    <Card>
      <View style={styles.textContainer}>
        {text ? <Text style={styles.primary}>{text}</Text> : children}
      </View>
      <View
        style={[
          styles.button,
          { backgroundColor: color ? color : COLORS.purple },
        ]}
      >
        {!!onPress && <Text style={styles.buttonText}>></Text>}
      </View>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    width: 25,
    minWidth: 25,
    maxWidth: 25,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  primary: {
    fontSize: 18,
    color: '#bcc3dc',
  },
  textContainer: {
    flex: 0,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
  },
});

export default NavigationButton;
