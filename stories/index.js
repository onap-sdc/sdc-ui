import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Welcome from './Welcome';
import Colors from './Colors.js';
import Typography from './Typography.js';
import Button from './Button.js';

storiesOf('Welcome', module)
	.add('', () => <Welcome />);

storiesOf('Colors', module)
	.add('', () => <Colors />);

storiesOf('Typography', module)
	.add('', () => <Typography />);

storiesOf('Button', module)
	.add('', () => <Button />);	
