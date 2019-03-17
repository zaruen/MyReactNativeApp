import { Platform } from 'react-native';
import { getStorybookUI, configure } from '@storybook/react-native';
import { loadStories } from './storyLoader';
import React from 'react';

// import stories
configure(loadStories, module);

const StorybookUI = getStorybookUI({
  host: Platform.OS === 'ios' ? 'localhost' : '10.0.2.2',
  port: 7007,
  onDeviceUI: false,
});

class StorybookUIRoot extends React.Component {
  render() {
    return <StorybookUI />;
  }
}

export default StorybookUIRoot;
