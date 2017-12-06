import {OnInit, Component, Input, ViewChildren, QueryList, ElementRef, EventEmitter, Output} from "@angular/core";
import {IColumnConfigModel, IFilterItem, IFilterGroup, FilterOperator} from "../models/table.models";

/**
 * Created by M.S.BIT on 28/11/2017.
 */

export interface FilterControl {
    id: number,
    group?: number;
}

@Component({
    selector: 'sdc-table-filter-bar',
    templateUrl: './table-filter-bar.component.html',
    styles: [`
        .sdc-table-filter-bar {
  border: 1px solid #666;
  background-color: #f3f3f3;
  padding: 10px;
  margin-bottom: 5px;
}
  .sdc-table-filter-bar__form-control {
     max-width: 150px;
  }
  .sdc-table-filter-bar__form-group {
    display: inline-block;
    width: 240px;
  }
  .sdc-table-filter-bar__add-button {
    padding: 6px 20px;
    margin-bottom: 5px;
  }
  .sdc-table-filter-bar__button {
    padding: 6px 20px;
  }
  .sdc-table-filter-bar__group {
    border: 1px solid #666;
    padding: 10px;
    margin-bottom: 5px;
    background-color: #ff7979;
  }
.sdc-table-filter-bar__form {
 display: flex;
}
.sdc-table-filter-bar__group__title {
  font-size: 11px;
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-right: 10px;
  font-weight: 900;
}
    `]
})

export class TableFilterBarComponent implements OnInit{

    @ViewChildren('form') forms: QueryList<ElementRef>;

    @Output('changed') changed: EventEmitter<IFilterGroup[]> = new EventEmitter();
    @Input() hidePanel: boolean = false;

    public filterControls: FilterControl[] = [{id:0}];

    static groupNum = 1;

    private filterGroups: IFilterGroup[] = [];

    @Input() headerCols: any;

    ngOnInit(): void {

    }

    clearFilters(){
        this.filterControls = [{id:0}];
    }

    private getFilterFromFormData(form:ElementRef):IFilterItem {
        if(form && form.nativeElement){
            return {
                field: form.nativeElement.elements[0].value,
                operator: <number> +form.nativeElement.elements[1].value,
                value: form.nativeElement.elements[2].value
            };
        }
        return null;
    }

    createFilterGroup(form: any, index:number){
        let data = form.elements[2].value;
        this.filterControls[index].group = ++TableFilterBarComponent.groupNum;
        setTimeout(()=>{
            const formElementRef:ElementRef = this.forms.find((element, idx) => idx === index);
            formElementRef.nativeElement.elements[2].value = data;
            console.log("filterControls", this.filterControls[index].group, this.filterControls, form)
        });

    }

    addToFilterToGroup(index: number){
        const formElementRef:ElementRef = this.forms.find((element, idx) => idx === index);
        if(formElementRef){
            this.addAnotherFilter(formElementRef.nativeElement, this.filterControls[index].group, ++index);
        }
    }

    addAnotherFilter(formElement?, group?: number, at?: number){
        formElement = formElement || this.forms.last.nativeElement;
        if(formElement['elements'] && formElement['elements'][2] && formElement['elements'][2].value){
            if(at){
                this.filterControls.splice(at,0,{id:this.forms.length, group});
            }else {
                this.filterControls.push({id:this.forms.length, group});
            }
        }
    }

    submitFilter(){
        let newFilters = [];
        let currentGroupIndex;
        let groups = {};
        this.forms.forEach((item, index)=>{
            if(item.nativeElement['elements'][2].value){
                const filterItem: IFilterItem = this.getFilterFromFormData(item);
                if(this.filterControls[index].group){
                    const groupIndex = this.filterControls[index].group;
                    groups[groupIndex] = groups[groupIndex] || [];
                    groups[groupIndex].push(filterItem);
                }else {
                    currentGroupIndex = null;
                    newFilters.push({filters:[filterItem]});
                }
            }
        });
        let groupArray = Object.keys(groups).map(key => {
            return {filters: groups[key]}
        });

        this.filterGroups = newFilters.concat(groupArray);
        this.changed.next(this.filterGroups);
    }

    removeFilter(index) {
        this.filterControls.splice(index,1);
    }

    searchFilter(form: HTMLFormElement) {
        const searchText = form.elements[0]['value'];

        const cols: IColumnConfigModel[] = this.headerCols.filter((item) => {
            return item.searchable;
        });

        if(cols && cols.length > 0) {
            let groups: IFilterGroup[] = [{ filters: [] }];

            cols.forEach((item) => {
                groups[0].filters.push ({
                    field: item.key,
                    operator: FilterOperator.Equal,
                    value: searchText
                });
            });

            this.changed.next(groups);
        }
    }

    searchClear(form: HTMLFormElement) {
        form.elements[0]['value'] = "";

        this.searchFilter(form);
    }
}
