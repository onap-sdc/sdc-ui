import React from 'react';
import {storiesOf} from '@storybook/react';

import Welcome from './Welcome.stories.js';
import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Checkboxes from './Checkbox.stories.js';
import Icons from './SVGIcon.stories.js';
import Tiles from './Tiles.stories.js';
import Tabs from './Tabs.stories.js';

import Radios from './Radio.stories.js';
import RadioGroups from './RadioGroup.stories.js';

import DefaultButtons from './buttons/DefaultButtons.stories.js';
import OutlineButtons from './buttons/OutlineButtons.stories.js';
import OutlineRoundedButtons from './buttons/OutlineRoundedButtons.stories.js';
import LinkButtons from './buttons/LinkButtons.stories.js';

storiesOf('Welcome', module)
	.add('SDC-UI Style-Guide', () => <Welcome />);

storiesOf('Colors', module)
	.add('Color Palette', () => <Colors />);

storiesOf('Typography', module)
	.add('Typography', () => <Typography />);

storiesOf('Buttons', module)
	.add('Default', () => <DefaultButtons />)
	.add('Outline', () => <OutlineButtons />)
	.add('Rounded Outline', () => <OutlineRoundedButtons />)
	.add('Link', () => <LinkButtons />);

storiesOf('Checkboxes', module)
	.add('Checkboxes', () => <Checkboxes />);

storiesOf('Icons', module)
	.add('SVG Icons', () => <Icons />);

storiesOf('Radios', module)
	.add('Radio Buttons', () => <Radios />)
	.add('Radio Button Groups', () => <RadioGroups />);

storiesOf('Tabs', module)
	.add('Tabs', () => <Tabs />);

storiesOf('Tiles', module)
	.add('Tiles', () => <Tiles />);
