import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../../src/react/Button.js';

import PrimaryButton from '../../../components/button/button-primary.html';
import PrimaryButtonDisabled from '../../../components/button/button-primary-disabled.html';
import ExtraSmall from '../../../components/button/button-primary-extra-small.html';
import Small from '../../../components/button/button-primary-small.html';
import Medium from '../../../components/button/button-primary-medium.html';
import Large from '../../../components/button/button-primary-large.html';
import Auto from '../../../components/button/button-primary-auto.html';

let examples = {
	'Primary Default': {
		jsx: <ReactButton onClick={() => {}}>Click Me</ReactButton>,
		html: PrimaryButton
	},
	'Primary Disabled': {
		jsx: <ReactButton onClick={() => {}} disabled>Click Me</ReactButton>,
		html: PrimaryButtonDisabled,
	},
	'Extra Small': {
		jsx: <ReactButton size='x-small' onClick={() => {}}>Click Me</ReactButton>,
		html: ExtraSmall
	},
	'Small': {
		jsx: <ReactButton size='small' onClick={() => {}}>Click Me</ReactButton>,
		html: Small,
	},
	'Medium': {
		jsx: <ReactButton size='medium' onClick={() => {}}>Click Me</ReactButton>,
		html: Medium
	},
	'Large': {
		jsx: <ReactButton size='large' onClick={() => {}}>Click Me</ReactButton>,
		html: Large,
	},
	'Auto Sizing': {
		jsx: <ReactButton size='default' onClick={() => {}}>Click Me</ReactButton>,
		html: Auto,
	}
};

const DefaultButtons = () => (
	<Examples examples={examples} />
);

export default DefaultButtons;
