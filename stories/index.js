import React from 'react';
import {storiesOf, action} from '@kadira/storybook';
import Welcome from './Welcome';
import Colors from './Colors.jsx';
import Typography from './Typography.jsx';

storiesOf('Welcome', module)
	.add('to Storybook', () => <Welcome />);

storiesOf('Colors', module)
	.add('Palette', () => <Colors />);

storiesOf('Typography', module)
	.add('Font Family and Size', () => <Typography />);
