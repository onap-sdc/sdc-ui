import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Welcome from './Welcome';
import Colors from './Colors.js';
import Typography from './Typography.js';
import Buttons from './Buttons.js';

storiesOf('Welcome', module)
	.add('', () => <Welcome />);

storiesOf('Colors', module)
	.add('', () => <Colors />);

storiesOf('Typography', module)
	.add('', () => <Typography />);

storiesOf('Buttons', module)
	.add('', () => <Buttons />);	
