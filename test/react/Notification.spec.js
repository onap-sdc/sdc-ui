import React from 'react';
import Notification from '../../src/react/Notification.js';

import renderer from 'react-test-renderer';

describe('Notification', () => {
	test('Notification - info', () => {
		const button = renderer.create(<Notification type='info' message='message' title='title' />).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Notification - success', () => {
		const button = renderer.create(<Notification type='success' message='message' title='title' />).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Notification - warning', () => {
		const button = renderer.create(<Notification type='warning' message='message' title='title' />).toJSON();
		expect(button).toMatchSnapshot();
	});

	test('Notification - error', () => {
		const button = renderer.create(<Notification type='error' message='message' title='title' />).toJSON();
		expect(button).toMatchSnapshot();
	});
});