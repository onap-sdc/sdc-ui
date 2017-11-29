import {OnInit, Component, Input, ViewChildren, QueryList, ElementRef} from "@angular/core";
import {FilterOperator, IFilterItem, IFilterGroup} from "../models/table.models";
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
    styles: []
})

export class TableFilterBarComponent implements OnInit{

    @ViewChildren('form') forms: QueryList<ElementRef>;

    public filterControls: FilterControl[] = [{id:0}];

    static groupNum = 1;

    private groups = {};

    private filterItems = [];


    @Input() headerCols: any;

    ngOnInit(): void {

    }

    clearFilters(){
        this.filterItems = [];
    }

    createFilterGroup(index){
        this.filterControls[index].group = ++TableFilterBarComponent.groupNum;
        console.log("filterControls", this.filterControls[index].group, this.filterControls)
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

        this.forms.forEach((item, index)=>{
            if(item.nativeElement['elements'] && item.nativeElement['elements'][2] && item.nativeElement['elements'][2].value){
                const filterItem: IFilterItem = {
                    field:item.nativeElement['elements'][0].value,
                    operator:item.nativeElement['elements'][1].value,
                    value:item.nativeElement['elements'][2].value,
                };
                currentGroupIndex = this.groups[index] && index|| null;
                if(currentGroupIndex && this.groups[currentGroupIndex].indexOf(index)){
                    currentGroupIndex = currentGroupIndex || index;
                    newFilters[currentGroupIndex] = newFilters[currentGroupIndex] || [];
                    newFilters[currentGroupIndex].push(filterItem);
                }else {
                    currentGroupIndex = null;
                    newFilters.push([filterItem]);
                }
            }
        });
        this.filterItems = newFilters;
        console.log("Filters", this.filterItems);
    }



    removeFilter(index){
        this.filterControls.splice(index,1);
    }

}
