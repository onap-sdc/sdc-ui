import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button.js';

import HTMLButtonDefaultPrimary from '../components/button/button-default-primary.html';
import HTMLButtonDefaultWhite from '../components/button/button-default-white.html';
import HTMLButtonDefaultGray from '../components/button/button-default-gray.html';
import HTMLButtonDefaultPositive from '../components/button/button-default-positive.html';
import HTMLButtonDefaultNegative from '../components/button/button-default-negative.html';
import HTMLButtonDefaultWarning from '../components/button/button-default-warning.html';

import HTMLButtonDefaultPrimaryDisabled from '../components/button/button-default-primary-disabled.html';
import HTMLButtonDefaultWhiteDisabled from '../components/button/button-default-white-disabled.html';
import HTMLButtonDefaultGrayDisabled from '../components/button/button-default-gray-disabled.html';
import HTMLButtonDefaultPositiveDisabled from '../components/button/button-default-positive-disabled.html';
import HTMLButtonDefaultNegativeDisabled from '../components/button/button-default-negative-disabled.html';
import HTMLButtonDefaultWarningDisabled from '../components/button/button-default-warning-disabled.html';

import HTMLButtonOutlinePrimary from '../components/button/button-outline-primary.html';
import HTMLButtonOutlineGray from '../components/button/button-outline-gray.html';
import HTMLButtonOutlinePositive from '../components/button/button-outline-positive.html';
import HTMLButtonOutlineNegative from '../components/button/button-outline-negative.html';
import HTMLButtonOutlineWarning from '../components/button/button-outline-warning.html';

import HTMLButtonOutlinePrimaryDisabled from '../components/button/button-outline-primary-disabled.html';
import HTMLButtonOutlineGrayDisabled from '../components/button/button-outline-gray-disabled.html';
import HTMLButtonOutlinePositiveDisabled from '../components/button/button-outline-positive-disabled.html';
import HTMLButtonOutlineNegativeDisabled from '../components/button/button-outline-negative-disabled.html';
import HTMLButtonOutlineWarningDisabled from '../components/button/button-outline-warning-disabled.html';

import HTMLButtonOutlineRoundedPrimary from '../components/button/button-outline-rounded-primary.html';
import HTMLButtonOutlineRoundedGray from '../components/button/button-outline-rounded-gray.html';
import HTMLButtonOutlineRoundedPositive from '../components/button/button-outline-rounded-positive.html';
import HTMLButtonOutlineRoundedNegative from '../components/button/button-outline-rounded-negative.html';
import HTMLButtonOutlineRoundedWarning from '../components/button/button-outline-rounded-warning.html';

import HTMLButtonOutlineRoundedPrimaryDisabled from '../components/button/button-outline-rounded-primary-disabled.html';
import HTMLButtonOutlineRoundedGrayDisabled from '../components/button/button-outline-rounded-gray-disabled.html';
import HTMLButtonOutlineRoundedPositiveDisabled from '../components/button/button-outline-rounded-positive-disabled.html';
import HTMLButtonOutlineRoundedNegativeDisabled from '../components/button/button-outline-rounded-negative-disabled.html';
import HTMLButtonOutlineRoundedWarningDisabled from '../components/button/button-outline-rounded-warning-disabled.html';

import HTMLButtonLinkPrimary from '../components/button/button-link-primary.html';
import HTMLButtonLinkPrimaryDisabled from '../components/button/button-link-primary-disabled.html';
import HTMLButtonLinkPrimaryWithIcon from '../components/button/button-link-primary-with-icon.html';
import HTMLButtonLinkPrimaryWithIconDisabled from '../components/button/button-link-primary-with-icon-disabled.html';
import HTMLButtonLinkPrimaryWithIconSmall from '../components/button/button-link-primary-with-icon-small.html';
import HTMLButtonLinkPrimaryWithIconDisabledSmall from '../components/button/button-link-primary-with-icon-disabled-small.html';
import HTMLButtonLinkPrimaryWithIconMedium from '../components/button/button-link-primary-with-icon-medium.html';
import HTMLButtonLinkPrimaryWithIconDisabledMedium from '../components/button/button-link-primary-with-icon-disabled-medium.html';
import HTMLButtonLinkPrimaryWithIconLarge from '../components/button/button-link-primary-with-icon-large.html';
import HTMLButtonLinkPrimaryWithIconDisabledLarge from '../components/button/button-link-primary-with-icon-disabled-large.html';


import HTMLButtonLinkSecondary from '../components/button/button-link-secondary.html';
import HTMLButtonLinkSecondaryDisabled from '../components/button/button-link-secondary-disabled.html';
import HTMLButtonLinkSecondaryWithIcon from '../components/button/button-link-secondary-with-icon.html';
import HTMLButtonLinkSecondaryWithIconDisabled from '../components/button/button-link-secondary-with-icon-disabled.html';
import HTMLButtonLinkSecondaryWithIconSmall from '../components/button/button-link-secondary-with-icon-small.html';
import HTMLButtonLinkSecondaryWithIconDisabledSmall from '../components/button/button-link-secondary-with-icon-disabled-small.html';
import HTMLButtonLinkSecondaryWithIconMedium from '../components/button/button-link-secondary-with-icon-medium.html';
import HTMLButtonLinkSecondaryWithIconDisabledMedium from '../components/button/button-link-secondary-with-icon-disabled-medium.html';
import HTMLButtonLinkSecondaryWithIconLarge from '../components/button/button-link-secondary-with-icon-large.html';
import HTMLButtonLinkSecondaryWithIconDisabledLarge from '../components/button/button-link-secondary-with-icon-disabled-large.html';



let examples = {
	// Default buttons
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

	// Outline buttons
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
	},

	// Outline rounded buttons
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
	},

	// Link Buttons
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
	'Primary Link With Small Icon': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='small' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconSmall
	},
	'Primary Link With Small Icon Disabled': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='small' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconDisabledSmall,
		displayTitle: false
	},
	'Primary Link With Medium Icon': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='medium' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconMedium
	},
	'Primary Link With Medium Icon Disabled': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='medium' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconDisabledMedium,
		displayTitle: false
	},
	'Primary Link With Large Icon': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='large' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconLarge
	},
	'Primary Link With Large Icon Disabled': {
		jsx: <ReactButton btnType='link' color='primary' iconName='plus' iconSize='large' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkPrimaryWithIconDisabledLarge,
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
	},
	'Secondary Link With Small Icon': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconsize='small' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconSmall
	},
	'Secondary Link With Small Icon Disabled': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconSize='small' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconDisabledSmall,
		displayTitle: false
	},
	'Secondary Link With Medium Icon': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconSize='medium' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconMedium
	},
	'Secondary Link With Nedium Icon Disabled': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconSize='medium' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconDisabledMedium,
		displayTitle: false
	},
	'Secondary Link With Large Icon': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconSize='large' onClick={() => {}}>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconLarge
	},
	'Secondary Link With Large Icon Disabled': {
		jsx: <ReactButton btnType='link' color='secondary' iconName='plus' iconSize='large' onClick={() => {}} disabled>Click Me</ReactButton>,
		html: HTMLButtonLinkSecondaryWithIconDisabledLarge,
		displayTitle: false
	}
};

const Buttons = () => (
		<Examples examples={examples} />
);

export default Buttons;
