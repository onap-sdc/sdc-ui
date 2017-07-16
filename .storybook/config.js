import { configure } from '@storybook/react';
import './storybook.scss';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
