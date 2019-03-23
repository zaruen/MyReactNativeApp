import { storiesOf } from '@storybook/react-native';
import React from 'react';
import ButtonCard from './ButtonCard';

storiesOf('Components|Molecules/Card', module).add('default', () => (
  <>
    <ButtonCard title={'Default'} onPress={() => {}} />
    <ButtonCard title={'Title'} text={'With text'} onPress={() => {}} />
    <ButtonCard title={'Without onPress'} />
    <ButtonCard
      title={'Card style'}
      text={'With text'}
      onPress={() => {}}
      card
    />
  </>
));
