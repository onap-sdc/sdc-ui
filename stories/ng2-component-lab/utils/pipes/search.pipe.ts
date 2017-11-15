/**
 * Created by rc2122 on 11/15/2017.
 */
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'searchFilter',
})
export class SearchFilterPipe implements PipeTransform {
    public transform(value, text: string) {
        if (!text || !text.length) return value;
        return value.filter((item) => {
            return item.toLowerCase().indexOf(text.toLowerCase()) > -1;
        });
    }
}
