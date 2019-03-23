import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text, View } from 'react-native';
import Card from './Card';

storiesOf('Components/Atoms/Card', module).add('default', () => (
  <Card>
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ color: '#fff' }}>This is a card</Text>
    </View>
  </Card>
));
