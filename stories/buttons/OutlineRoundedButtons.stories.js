import React from 'react';
import Examples from '../utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

import HTMLButtonOutlineRoundedPrimary from '../../components/button/button-outline-rounded-primary.html';
import HTMLButtonOutlineRoundedGray from '../../components/button/button-outline-rounded-gray.html';
import HTMLButtonOutlineRoundedPositive from '../../components/button/button-outline-rounded-positive.html';
import HTMLButtonOutlineRoundedNegative from '../../components/button/button-outline-rounded-negative.html';
import HTMLButtonOutlineRoundedWarning from '../../components/button/button-outline-rounded-warning.html';

import HTMLButtonOutlineRoundedPrimaryDisabled from '../../components/button/button-outline-rounded-primary-disabled.html';
import HTMLButtonOutlineRoundedGrayDisabled from '../../components/button/button-outline-rounded-gray-disabled.html';
import HTMLButtonOutlineRoundedPositiveDisabled from '../../components/button/button-outline-rounded-positive-disabled.html';
import HTMLButtonOutlineRoundedNegativeDisabled from '../../components/button/button-outline-rounded-negative-disabled.html';
import HTMLButtonOutlineRoundedWarningDisabled from '../../components/button/button-outline-rounded-warning-disabled.html';

let examples = {
	'Primary Outline Rounded': {
		jsx: <ReactButton btnType='outline-rounded' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPrimary
	},
	'Primary Outline Rounded Disabled': {
		jsx: <ReactButton btnType='outline-rounded' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPrimaryDisabled,
		displayTitle: false
	},
	'Gray Outline Rounded': {
		jsx: <ReactButton btnType='outline-rounded' color='gray' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedGray
	},
	'Gray Outline Rounded Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='gray' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedGrayDisabled,
		displayTitle: false
	},
	'Positive Rounded Outline': {
		jsx: <ReactButton btnType='outline-rounded' color='positive' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPositive
	},
	'Positive Rounded Outline Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='positive' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedPositiveDisabled,
		displayTitle: false
	},
	'Negative Rounded Outline': {
		jsx: <ReactButton btnType='outline-rounded' color='negative' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedNegative
	},
	'Negative Rounded Outline Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='negative' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedNegativeDisabled,
		displayTitle: false
	},
	'Warning Rounded Outline': {
		jsx: <ReactButton btnType='outline-rounded' color='warning' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedWarning
	},
	'Warning Rounded Outline Disabled': {
		jsx: <ReactButton btnType='outline-rounded' color='warning' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonOutlineRoundedWarningDisabled,
		displayTitle: false
	}
}

const OutlineRoundedButtons = () => (
		<Examples examples={examples} />
);

export default OutlineRoundedButtons;
