import { experimentOn } from '@islavi/ng2-component-lab';

export default experimentOn('Loader')
    .group("Loader",[
      {
        id: 'Loader',
        showSource: true,
        title: 'Regular loader',
        description: 'Simple loader',
        template: `<sdc-loader label="Simple"></sdc-loader>`,
      }
    ])
      