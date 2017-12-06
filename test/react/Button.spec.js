import React from 'react';
import Button from '../../src/react/Button.js';

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
