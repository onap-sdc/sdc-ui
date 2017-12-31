import { Pipe, PipeTransform } from '@angular/core';
import { IDataSchema } from './autocomplete.component';

@Pipe ({
    name: 'AutocompletePipe',
})
export class AutocompletePipe implements PipeTransform {
    public transform(data: IDataSchema[], text: string) {
        if (!text || !text.length) {
            return data;
        }
        return data.filter((item: IDataSchema) => {
            return item.value.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }
}
