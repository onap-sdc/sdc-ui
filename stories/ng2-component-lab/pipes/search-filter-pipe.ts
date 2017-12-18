import { Pipe, PipeTransform } from '@angular/core';

@Pipe ({
    name: 'PipeSearchFilter',
})
export class SearchFilterPipe implements PipeTransform {
    public transform(value, text: string) {
        if (!text || !text.length) {
            return value;
        }
        return value.filter((item) => {
            return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }
}
