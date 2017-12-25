/**
 * Created by rc2122 on 11/16/2017.
 */
import {experimentOn} from '@islavi/ng2-component-lab';

export default experimentOn('Autocomplete').group('Autocomlete',
[
    {
        id: 'simpleAutocomplete',
        title: 'Simple autocomplete data',
        description: 'Example of auto complete with simple data',
        showSource: true,
        context: {
            data: ['red', 'yellow', 'orange', 'green', 'white', 'black'],
            selectedOption: '',
            showSelectedItem: ((value: string) => {
                alert(value);
            })
        },
        template: `
        <sdc-autocomplete
            placeholder="search text"
            label="search by color:"
            [data]="data"
            (itemSelected)="showSelectedItem($event)"
            >
        </sdc-autocomplete>
        `
    },
    {
        id: 'complexAutocomplete',
        title: 'Complex autocomplete data',
        description: 'Example of auto complete with complex data',
        showSource: true,
        context: {
            data: [
                {id: 'redId', color: 'red'},
                {id: 'yellowId', color: 'yellow'},
                {id: 'orangeId', color: 'orange'},
                {id: 'greenId', color: 'green'},
                {id: 'whiteId', color: 'white'},
                {id: 'blackId', color: 'black'}
            ],
            showSelectedItem: ((value: string) => {
                alert(value);
            })
        },
        template: `
        <sdc-autocomplete
            placeholder="search text"
            label="search by color:"
            [data]="data"
            [dataSchema]="{key: 'id', value: 'color'}"
            (itemSelected)="showSelectedItem($event)"
            >
        </sdc-autocomplete>
        `
    },
    {
        id: 'complexAutocompleteWithBeData',
        title: 'Complex autocomplete data from server',
        description: 'Example of auto complete with complex data from server',
        showSource: true,
        context: {
            showSelectedItem: ((value: string) => {
                alert(value);
            })
        },
        template: `
        <sdc-autocomplete
            placeholder="search text"
            label="search by color:"
            [dataUrl]="httpaaasomeurl"
            [dataSchema]="{key: 'id', value: 'color'}"
            (itemSelected)="showSelectedItem($event)"
            >
        </sdc-autocomplete>
        `
    }
]);
