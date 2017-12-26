import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

import PrimaryButton from '../../components/button/button-primary.html';
import PrimaryButtonDisabled from '../../components/button/button-primary-disabled.html';
import SecondaryButton from '../../components/button/button-secondary.html';
import SecondaryButtonDisabled from '../../components/button/button-secondary-disabled.html';
import LinkButton from '../../components/button/button-link.html';
import LinkButtonDisabled from '../../components/button/button-link-disabled.html';

let examples = {
	'Primary': {
		jsx: <ReactButton onClick={() => {}}>Click Me</ReactButton>,
		html: PrimaryButton
	},
	'Primary Disabled': {
		jsx: <ReactButton onClick={() => {}} disabled>Click Me</ReactButton>,
		html: PrimaryButtonDisabled,
		displayTitle: false
	},
	'Secondary': {
		jsx: <ReactButton btnType='secondary' onClick={() => {}}>Click Me</ReactButton>,
		html: SecondaryButton
	},
	'Secondary Disabled': {
		jsx: <ReactButton btnType='secondary' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: SecondaryButtonDisabled,
		displayTitle: false
	},
	'Link': {
		jsx: <ReactButton btnType='link' onClick={() => {}}>Click Me</ReactButton>,
		html: LinkButton
	},
	'Link Disabled': {
		jsx: <ReactButton btnType='link' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: LinkButtonDisabled,
		displayTitle: false
	}
};

const DefaultButtons = () => (
	<Examples examples={examples} />
);

export default DefaultButtons;
