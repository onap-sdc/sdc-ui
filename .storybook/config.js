import { configure } from '@storybook/react';
import './storybook.scss';

function loadStories() {
  require('../stories/react');
}

configure(loadStories, module);
