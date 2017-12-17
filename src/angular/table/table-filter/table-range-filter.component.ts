import {Component, OnInit, Input} from "@angular/core";
import {ColumnDataTypes, FilterOperator, IColumnConfigModel, IComponentFilterGroup, IFilterGroup
} from '../models/table.models';

@Component({
    selector: 'sdc-table-range-filter',
    templateUrl: './table-range-filter.component.html',
//    styleUrls: ['./table-filter.component.css']
    styles: [`.sdc-table-filter {
    border: 1px solid #666;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
    width: 60%;
}

.sdc-table-filter-group {
    border: 1px solid #666;
    padding: 10px;
    margin-bottom: 5px;
    background-color: white;
}

.sdc-table-filter-form {
    display: block;
}

.sdc-table-filter-form-group {
    display: flex;
    width: 240px;
    margin: 10px;
    /*padding-top: 20px;*/
}
.sdc-table-filter-label, .sdc-table-filter-input  {
    width: 150px;
    flex-grow: 0;
    flex-shrink: 0;
}
.sdc-table-filter-span {
    padding-right: 5px;
}
.sdc-table-filter-separator {
    padding-left: 15px;
}
.sdc-table-filter-button {
        padding: 5px 5px;
}
`]
})
export class TableRangeFilterComponent implements IComponentFilterGroup, OnInit {

    @Input() headerCols: any;
    @Input() field: string = '';

    public colTitle: string;
    private colDataType: ColumnDataTypes;

    public showInput: boolean[] = [true, false, false, false, false];
    public valuesFrom: string[] = ['', '', '', '', ''];
    public valuesTo: string[] = ['', '', '', '', ''];

    public addDisabled: boolean = false;
    public deleteDisabled: boolean = true;

    ngOnInit(): void {
        const cols: IColumnConfigModel[] = this.headerCols.filter((item) => {
            return item.key && item.key.toLowerCase().trim() == this.field.toLowerCase().trim();
        });

        if(cols.length > 0) {
            this.colTitle = cols[0].title;
            this.colDataType = cols[0].dataType;
        }
    }

    public clearFilterGroup(): void {
        this.showInput = this.showInput.map((value, index) => {
            if (index > 0) {
                return false;
            }
            return value;
        });

        this.valuesFrom = this.valuesFrom.map((value, index) => {
            return '';
        }) ;

        this.valuesTo = this.valuesTo.map((value, index) => {
            return '';
        }) ;
    }

    public get filterGroup(): IFilterGroup  {
        return this.getFilterGroup();
    }

    private getFilterGroup(): IFilterGroup {
        let group: IFilterGroup = { filters: [] };

        this.valuesFrom.forEach((value) => {
            group.filters.push({
                field: this.field,
                operator: FilterOperator.Range,
                value: value
            });
        });

        this.valuesTo.forEach((value, index) => {
            group.filters[index].value2 = value;
        });

        return this.prepareFilterGroup(group);
    }

    private prepareFilterGroup(group: IFilterGroup): IFilterGroup {
        group.filters = group.filters.filter((item) => {
            if (item.value && item.value2) {
                return true;
            }

            if (item.value && !item.value2) {
                item.operator = FilterOperator.GreaterThanOrEqual;
                return true;
            }

            if (!item.value && item.value2) {
                item.operator = FilterOperator.LessThanOrEqual;
                item.value = item.value2;
                return true;
            }

            return false;
        });

        return group;
    }

    public addItem() {
        const index: number = this.showInput.indexOf(false);

        if(index > 0) {
            this.showInput[index] = true;
        }

        this.setDisabled();
    }

    public deleteItem() {
        const index: number = this.showInput.lastIndexOf(true);

        if(index > 0) {
            this.showInput[index] = false;
            this.valuesFrom[index] = '';
            this.valuesTo[index] = '';
        }

        this.setDisabled();
    }

    private setDisabled() {
        const index: number = this.showInput.lastIndexOf(true);

        if(index == 0) {
            this.addDisabled = false;
            this.deleteDisabled = true;
        } else if (index == this.showInput.length - 1) {
            this.addDisabled = true;
            this.deleteDisabled = false;
        } else {
            this.addDisabled = false;
            this.deleteDisabled = false;
        }
    }
}
