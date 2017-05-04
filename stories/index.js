import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Welcome from './Welcome.stories.js';
import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Buttons from './Buttons.stories.js';

storiesOf('Welcome', module)
	.add('', () => <Welcome />);

storiesOf('Colors', module)
	.add('', () => <Colors />);

storiesOf('Typography', module)
	.add('', () => <Typography />);

storiesOf('Buttons', module)
	.add('', () => <Buttons />);	
