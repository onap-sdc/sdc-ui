import React from 'react';
import Examples from './utils/Examples.js';
import Notification from '../../src/react/Notification.js';
import HTMLNotificationInfo from '../../components/notification/notification-info.html';
import HTMLNotificationSuccess from '../../components/notification/notification-success.html';
import HTMLNotificationWarning from '../../components/notification/notification-warning.html';
import HTMLNotificationError from '../../components/notification/notification-error.html';

let examples = {
	Success: {
		jsx: <Notification title='Title' message='message' type='success' />,
		html: HTMLNotificationSuccess
	},
	Warning: {
		jsx: <Notification title='Title' message='message' type='warning' />,
		html: HTMLNotificationWarning
	},
	Info: {
		jsx: <Notification title='Title' message='message' type='info' />,
		html: HTMLNotificationInfo
	},
	Error: {
		jsx: <Notification title='Title' message='message' type='error' />,
		html: HTMLNotificationError
	}

};

const Notifications = () => <Examples examples={examples} />;

export default Notifications;
