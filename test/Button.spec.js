import React from 'react';
import Button from '../src/react/Button.js';

import HTMLButtonDefaultPrimary from '../components/button/button-default-primary.html';
import HTMLButtonDefaultWhite from '../components/button/button-default-white.html';
import HTMLButtonDefaultGray from '../components/button/button-default-gray.html';
import HTMLButtonDefaultPositive from '../components/button/button-default-positive.html';
import HTMLButtonDefaultNegative from '../components/button/button-default-negative.html';
import HTMLButtonDefaultWarning from '../components/button/button-default-warning.html';

import HTMLButtonOutlinePrimary from '../components/button/button-outline-primary.html';
import HTMLButtonOutlineGray from '../components/button/button-outline-gray.html';
import HTMLButtonOutlinePositive from '../components/button/button-outline-positive.html';
import HTMLButtonOutlineNegative from '../components/button/button-outline-negative.html';

import HTMLButtonDefaultPrimaryDisabled from '../components/button/button-default-primary-disabled.html';

import renderer from 'react-test-renderer';

describe('Button', () => {
	test('Button - Default - Primary', () => {
		const button = renderer.create(<Button>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Primary - Disabled', () => {
		const button = renderer.create(<Button disabled>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - White', () => {
		const button = renderer.create(<Button color='white'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Gray', () => {
		const button = renderer.create(<Button color='gray'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Positive', () => {
		const button = renderer.create(<Button color='positive'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Negative', () => {
		const button = renderer.create(<Button color='negative'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Default - Warning', () => {
		const button = renderer.create(<Button color='warning'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Primary', () => {
		const button = renderer.create(<Button btnType='outline'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Gray', () => {
		const button = renderer.create(<Button btnType='outline' color='gray'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Positive', () => {
		const button = renderer.create(<Button btnType='outline' color='positive'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Outline - Negative', () => {
		const button = renderer.create(<Button btnType='outline' color='negative'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary', () => {
		const button = renderer.create(<Button btnType='link' color='primary'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary - Disabled', () => {
		const button = renderer.create(<Button btnType='link' color='primary' disabled>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Button - Link - Primary - With Icon', () => {
		const button = renderer.create(<Button btnType='link' color='primary' iconName='plus'>Click Me</Button>).toJSON();
		expect(button).toMatchSnapshot();
	});
});
