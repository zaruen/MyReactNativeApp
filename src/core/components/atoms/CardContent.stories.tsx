import { storiesOf } from '@storybook/react-native';
import React from 'react';
import CardContent from './CardContent';

storiesOf('Components/Atoms/CardContent', module).add('default', () => (
  <>
    <CardContent title="Title" text="with text" />
    <CardContent title="Centered" text="with text" center />
  </>
));
