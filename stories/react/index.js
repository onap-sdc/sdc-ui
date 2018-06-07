import React from 'react';
import { storiesOf } from '@storybook/react';

import PrimaryButtons from './buttons/PrimaryButtons.stories.js';
import SecondaryButtons from './buttons/SecondaryButtons.stories.js';
import LinkButtons from './buttons/LinkButtons.stories.js';

import Colors from './Colors.stories.js';
import Typography from './Typography.stories.js';
import Checkboxes from './Checkbox.stories.js';
import Checklist from './Checklist.stories.js';
import Input from './Input.stories.js';
import Icons from './SVGIcon.stories.js';
import Tiles from './Tiles.stories.js';
import Tabs from './Tabs.stories.js';
import Radios from './Radio.stories.js';
import RadioGroups from './RadioGroup.stories.js';
import Modals from './Modal.stories.js';
import PopupMenu from './PopupMenu.stories.js';
import Accordion from './Accordion.stories.js';
import Panel from './Panel.stories.js';
import Notifications from './Notification.stories.js';

storiesOf('Colors', module)
	.add('Color Palette', () => <Colors />);

storiesOf('Typography', module)
	.add('Typography', () => <Typography />);

storiesOf('Accordion', module)
	.add('Accordion', () => <Accordion />);

storiesOf('Buttons', module)
	.add('Primary', () => <PrimaryButtons />)
	.add('Secondary', () => <SecondaryButtons />)
	.add('Link', () => <LinkButtons />);

storiesOf('Checkboxes', module)
	.add('Checkboxes', () => <Checkboxes />);

storiesOf('Checklist', module)
	.add('Checklist', () => <Checklist />);

storiesOf('Input Fields', module)
	.add('Input Text', () => <Input />);

storiesOf('Icons', module)
	.add('SVG Icons', () => <Icons />);

storiesOf('Menu', module)
	.add('Popup Menu', () => <PopupMenu />);

storiesOf('Modals', module)
	.add('Modal examples', () => <Modals />);
storiesOf('Notifications', module)
	.add('Notifications', () => <Notifications />);
storiesOf('Radios', module)
	.add('Radio Buttons', () => <Radios />)
	.add('Radio Button Groups', () => <RadioGroups />);

storiesOf('Panel', module)
	.add('Panel', () => <Panel />);

storiesOf('Tabs', module)
	.add('Tabs', () => <Tabs />);

storiesOf('Tiles', module)
	.add('Tiles', () => <Tiles />);
