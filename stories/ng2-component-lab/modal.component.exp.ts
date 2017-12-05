/**
 * Created by ob0695 on 10/16/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Modals')
    .group("Modals",[
      {
        id: 'errorModal',
        showSource: true,
        title: 'Error modal',
        description: 'Error modal',
        template: `
        <button-modal-example></button-modal-example>
        `
      }
    ]);
