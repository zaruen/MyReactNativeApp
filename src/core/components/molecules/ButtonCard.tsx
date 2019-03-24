import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import Card from '../atoms/Card';
import { COLORS } from '../../constants';
import CardContent from '../atoms/CardContent';

interface Props {
  onPress?: () => void;
  color?: string;
  title: string;
  text?: string;
  card?: boolean;
}

const ButtonCard: React.SFC<Props> = ({
  onPress,
  color,
  title,
  text,
  card,
}) => (
  <TouchableOpacity
    onPress={onPress}
    style={{ height: card ? 200 : 75 }}
    disabled={!onPress}
  >
    <Card>
      <View
        style={[
          styles.containerBase,
          card ? styles.containerColumn : styles.containerRow,
        ]}
      >
        <CardContent title={title} text={text} />
        <View
          style={[
            styles.buttonBase,
            { backgroundColor: color ? color : COLORS.primary.tone1 },
            card ? styles.buttonCard : styles.button,
          ]}
        >
          {!!onPress && (
            <Text style={styles.buttonText}>{card ? 'View' : '>'}</Text>
          )}
        </View>
      </View>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  buttonBase: {
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCard: {
    height: 25,
    minHeight: 25,
    maxHeight: 25,
  },
  button: {
    width: 25,
    minWidth: 25,
    maxWidth: 25,
  },
  buttonText: {
    color: COLORS.white,
    fontWeight: 'bold',
  },
  containerBase: {
    flex: 1,
    justifyContent: 'space-between',
  },
  containerRow: {
    flexDirection: 'row',
  },
  containerColumn: {
    flexDirection: 'column',
  },
});

export default ButtonCard;
