import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Notification')
    .group("Default Notification",[
        {
            id: 'notificationContainer',
            showSource: true,
            title: 'Notification Container',
            description: 'container example ...',
            template: `<sdc-notification-container></sdc-notification-container>`,
        }]);
