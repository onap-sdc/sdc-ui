import {Component, OnInit, AfterViewInit, Input, Output} from "@angular/core";
import {ColumnDataTypes, FilterOperator, IColumnConfigModel, IComponentFilterGroup, IFilterGroup
} from '../models/table.models';

@Component({
    selector: 'sdc-table-simple-filter',
    templateUrl: './table-simple-filter.component.html',
//    styleUrls: ['./table-filter.component.css']
    styles: [`.sdc-table-filter {
    border: 1px solid #666;
    background-color: white;
    padding: 10px;
    margin-bottom: 5px;
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
.sdc-table-filter-input {
    
}
.sdc-table-filter-button {
        padding: 5px 5px;
}
`]
})
export class TableSimpleFilterComponent implements IComponentFilterGroup, OnInit, AfterViewInit {

    @Input() headerCols: any;
    @Input() field: string = '';

    public colTitle: string;
    private colDataType: ColumnDataTypes;

    public showInput: boolean[] = [true, false, false, false, false];
    public values: string[] = ['', '', '', '', ''];

    public addDisabled: boolean = false;
    public deleteDisabled: boolean = true;

    ngOnInit(): void {
    }

    ngAfterViewInit() {
        const cols: IColumnConfigModel[] = this.headerCols.filter((item) => {
            return item.key && item.key.toLowerCase().trim() == this.field.toLowerCase().trim();
        });

        if(cols.length > 0) {
            this.colTitle = cols[0].title;
            this.colDataType = cols[0].dataType;
        }
    }

    public get FilterGroup(): IFilterGroup  {
        let filterGroup: IFilterGroup = { filters: [] };

        const resultValues = this.values.filter((value) => {
            return value;
        });

        resultValues.forEach((value) => {
            filterGroup.filters.push({
                field: this.field,
                operator: FilterOperator.Equal,
                value: value
            });
        });

        return filterGroup;
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
            this.values[index] = '';
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
