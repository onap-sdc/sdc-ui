import React from 'react';
import {storiesOf} from '@kadira/storybook';
import Welcome from './Welcome.stories.js';
import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Buttons from './Buttons.stories.js';
import Checkboxes from './Checkbox.stories.js';
import Radios from './Radio.stories.js';
import RadioGroups from './RadioGroup.stories.js';

storiesOf('Welcome', module)
	.add('', () => <Welcome />);

storiesOf('Colors', module)
	.add('', () => <Colors />);

storiesOf('Typography', module)
	.add('', () => <Typography />);

storiesOf('Buttons', module)
	.add('', () => <Buttons />);

storiesOf('Checkboxes', module)
	.add('', () => <Checkboxes />);

storiesOf('Radios', module)
	.add('', () => <Radios />);

storiesOf('RadioGroups', module)
	.add('', () => <RadioGroups />);
