import { configure } from '@kadira/storybook';
import './storybook.scss';

function loadStories() {
  require('../stories');
}

configure(loadStories, module);
