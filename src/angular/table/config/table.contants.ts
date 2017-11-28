import {ColumnDataTypes, TableModel, ITableConfig} from "../models/table.models";
/**
 * Created by M.S.BIT on 21/11/2017.
 */
export const CompaniesTableConfig: ITableConfig = {
    metaData:{
        fixedHeader: true,
        textAlignment:  'left',
        infinityScrolling: true,
        maxHeight: 500
    },
    columns: {
        name                   : {
            title    : 'Company Name',
            order    : 2,
            dataType : ColumnDataTypes.Text,
            clickable: true,
            sortable : true,

        },
        lastConnectionResult   : {
            order    : 1,
            title    : 'test',
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-unlink',
            width: '100px'
        },
        companyId              : {
            title   : 'ID',
            order   : 0,
            dataType: ColumnDataTypes.Number,
            sortable: true,

        },
        banDataList            : {
            title   : 'BAN/s',
            order   : 3,
            dataType: ColumnDataTypes.Array,
            sortable: true,
            width: '200px'
        },
        usersCount             : {
            title   : 'Users',
            order   : 4,
            dataType: ColumnDataTypes.Text,
            sortable: true,

        },
        serviceType            : {
            title   : 'Service',
            order   : 5,
            dataType: ColumnDataTypes.Text,
            sortable: true,

        },
        formattedCreationDate  : {
            title      : 'Created On',
            order      : 6,
            dataType   : ColumnDataTypes.Date,
            sortable   : true,
            sortByField: 'creationDate',

        },
        formattedLastUpdateDate: {
            title      : 'Last Modified',
            order      : 7,
            dataType   : ColumnDataTypes.Date,
            sortable   : true,
            sortByField: 'lastUpdateDate',
        },
        actions                : {
            order    : 8,
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-dots-three-vertical',
            clickable: true,
            // width    : '3em'

        },
    },
    rows   : {}
};
