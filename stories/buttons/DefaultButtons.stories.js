import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

import HTMLButtonDefaultPrimary from '../../components/button/button-default-primary.html';
import HTMLButtonDefaultWhite from '../../components/button/button-default-white.html';
import HTMLButtonDefaultGray from '../../components/button/button-default-gray.html';
import HTMLButtonDefaultPositive from '../../components/button/button-default-positive.html';
import HTMLButtonDefaultNegative from '../../components/button/button-default-negative.html';
import HTMLButtonDefaultWarning from '../../components/button/button-default-warning.html';

import HTMLButtonDefaultPrimaryDisabled from '../../components/button/button-default-primary-disabled.html';
import HTMLButtonDefaultWhiteDisabled from '../../components/button/button-default-white-disabled.html';
import HTMLButtonDefaultGrayDisabled from '../../components/button/button-default-gray-disabled.html';
import HTMLButtonDefaultPositiveDisabled from '../../components/button/button-default-positive-disabled.html';
import HTMLButtonDefaultNegativeDisabled from '../../components/button/button-default-negative-disabled.html';
import HTMLButtonDefaultWarningDisabled from '../../components/button/button-default-warning-disabled.html';

let examples = {
	'Primary Default': {
		jsx: <ReactButton onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultPrimary
	},
	'Primary Default Disabled': {
		jsx: <ReactButton onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultPrimaryDisabled,
		displayTitle: false
	},
	'White Default': {
		jsx: <ReactButton color='white' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultWhite
	},
	'White Default Disabled': {
		jsx: <ReactButton color='white' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultWhiteDisabled,
		displayTitle: false
	},
	'Gray Default': {
		jsx: <ReactButton color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultGray
	},
	'Gray Default Disabled': {
		jsx: <ReactButton color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultGrayDisabled,
		displayTitle: false
	},
	'Positive Default': {
		jsx: <ReactButton color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultPositive
	},
	'Positive Default Disabled': {
		jsx: <ReactButton color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultPositiveDisabled,
		displayTitle: false
	},
	'Negative Default': {
		jsx: <ReactButton color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultNegative
	},
	'Negative Default Disabled': {
		jsx: <ReactButton color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultNegativeDisabled,
		displayTitle: false
	},
	'Warning Default': {
		jsx: <ReactButton color='warning' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonDefaultWarning
	},
	'Warning Default Disabled': {
		jsx: <ReactButton color='warning' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonDefaultWarningDisabled,
		displayTitle: false
	},
}

const DefaultButtons = () => (
		<Examples examples={examples} />
);

export default DefaultButtons;
