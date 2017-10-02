import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

import HTMLButtonLinkPrimary from '../../components/button/button-link-primary.html';
import HTMLButtonLinkPrimaryDisabled from '../../components/button/button-link-primary-disabled.html';
import HTMLButtonLinkPrimaryWithIcon from '../../components/button/button-link-primary-with-icon.html';
import HTMLButtonLinkPrimaryWithIconDisabled from '../../components/button/button-link-primary-with-icon-disabled.html';

import HTMLButtonLinkSecondary from '../../components/button/button-link-secondary.html';
import HTMLButtonLinkSecondaryDisabled from '../../components/button/button-link-secondary-disabled.html';
import HTMLButtonLinkSecondaryWithIcon from '../../components/button/button-link-secondary-with-icon.html';
import HTMLButtonLinkSecondaryWithIconDisabled from '../../components/button/button-link-secondary-with-icon-disabled.html';


let examples = {
	'Primary Link': {
		jsx: <ReactButton btnType='link' color='primary' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimary
	},
	'Primary Link Disabled': {
		jsx: <ReactButton btnType='link' color='primary' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryDisabled,
		displayTitle: false
	},
	'Primary Link With Icon': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIcon
	},
	'Primary Link With Icon Disabled': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconDisabled,
		displayTitle: false
	},
	'Secondary Link': {
		jsx: <ReactButton btnType='link' color='secondary' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondary
	},
	'Secondary Link Disabled': {
		jsx: <ReactButton btnType='link' color='secondary' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryDisabled,
		displayTitle: false
	},
	'Secondary Link With Icon': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIcon
	},
	'Secondary Link With Icon Disabled': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconDisabled,
		displayTitle: false
	}
};

const LinkButtons = () => (
		<Examples examples={examples} />
);

export default LinkButtons;
