import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

import HTMLButtonOutlinePrimary from '../../components/button/button-outline-primary.html';
import HTMLButtonOutlineGray from '../../components/button/button-outline-gray.html';
import HTMLButtonOutlinePositive from '../../components/button/button-outline-positive.html';
import HTMLButtonOutlineNegative from '../../components/button/button-outline-negative.html';
import HTMLButtonOutlineWarning from '../../components/button/button-outline-warning.html';

import HTMLButtonOutlinePrimaryDisabled from '../../components/button/button-outline-primary-disabled.html';
import HTMLButtonOutlineGrayDisabled from '../../components/button/button-outline-gray-disabled.html';
import HTMLButtonOutlinePositiveDisabled from '../../components/button/button-outline-positive-disabled.html';
import HTMLButtonOutlineNegativeDisabled from '../../components/button/button-outline-negative-disabled.html';
import HTMLButtonOutlineWarningDisabled from '../../components/button/button-outline-warning-disabled.html';

let examples = {
	'Primary Outline': {
		jsx: <ReactButton btnType='outline' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlinePrimary
	},
	'Primary Outline Disabled': {
		jsx: <ReactButton btnType='outline' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlinePrimaryDisabled,
		displayTitle: false
	},
	'Gray Outline': {
		jsx: <ReactButton btnType='outline' color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineGray
	},
	'Gray Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineGrayDisabled,
		displayTitle: false
	},
	'Positive Outline': {
		jsx: <ReactButton btnType='outline' color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlinePositive
	},
	'Positive Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlinePositiveDisabled,
		displayTitle: false
	},
	'Negative Outline': {
		jsx: <ReactButton btnType='outline' color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineNegative
	},
	'Negative Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineNegativeDisabled,
		displayTitle: false
	},
	'Warning Outline': {
		jsx: <ReactButton btnType='outline' color='warning' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineWarning
	},
	'Warning Outline Disabled': {
		jsx: <ReactButton btnType='outline' color='warning' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineWarningDisabled,
		displayTitle: false
	}
}

const OutlineButtons = () => (
		<Examples examples={examples} />
);

export default OutlineButtons;
