import {ColumnDataTypes, TableModel, ITableConfig} from "../models/table.models";
/**
 * Created by M.S.BIT on 21/11/2017.
 */
export const CompaniesTableConfig: ITableConfig = {
    metaData:{
        fixedHeader: true
    },
    columns: {
        name                   : {
            title    : 'Company Name',
            order    : 2,
            dataType : ColumnDataTypes.Text,
            clickable: true,
            sortable : true,
            width: '25%'
        },
        lastConnectionResult   : {
            order    : 1,
            title    : 'test',
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-unlink',
            // width    : '3em',
            width: '4%'
        },
        companyId              : {
            title   : 'ID',
            order   : 0,
            dataType: ColumnDataTypes.Text,
            sortable: true,
            width: '6%'
        },
        banDataList            : {
            title   : 'BAN/s',
            order   : 3,
            dataType: ColumnDataTypes.Array,
            sortable: true,
            width: '18%'
        },
        usersCount             : {
            title   : 'Users',
            order   : 4,
            dataType: ColumnDataTypes.Text,
            sortable: true,
            width: '8%'
        },
        serviceType            : {
            title   : 'Service',
            order   : 5,
            dataType: ColumnDataTypes.Text,
            sortable: true,
            width: '9%'
        },
        formattedCreationDate  : {
            title      : 'Created On',
            order      : 6,
            dataType   : ColumnDataTypes.Html,
            sortable   : true,
            sortByField: 'creationDate',
            width: '13%'
        },
        formattedLastUpdateDate: {
            title      : 'Last Modified',
            order      : 7,
            dataType   : ColumnDataTypes.Html,
            sortable   : true,
            sortByField: 'lastUpdateDate',
            width: '13%'
        },
        actions                : {
            order    : 8,
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-dots-three-vertical',
            clickable: true,
            // width    : '3em'
            width: '4%'
        },
    },
    rows   : {}
};
