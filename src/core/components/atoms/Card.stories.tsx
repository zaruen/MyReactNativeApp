import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { Text } from 'react-native';
import Card from './Card';

storiesOf('Components|Atoms/Card', module).add('default', () => (
  <Card>
    <Text>COUCOU</Text>
  </Card>
));
