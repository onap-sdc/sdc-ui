import {ColumnDataTypes, ITableConfig} from "../models/table.models";

/**
 * Created by M.S.BIT on 21/11/2017.
 */

export const CompaniesTableConfig: ITableConfig = {
    metaData:{
        fixedHeader: true,
        infinityScrolling: true,
        rowsInPage: 24,
        maxHeight: 500
    },
    columns: {
        name                   : {
            title    : 'Company Name',
            order    : 0,
            dataType : ColumnDataTypes.Text,
            clickable: true,
            sortable : true,
            width: '400px',
            alignmentRow: 'left',
            alignmentHeader: 'center'
        },
        lastConnectionResult   : {
            order    : 1,
            title    : 'test',
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-unlink',
            alignmentRow: 'center',
            alignmentHeader: 'center'
        },
        companyId              : {
            title   : 'ID',
            order   : 2,
            dataType: ColumnDataTypes.Number,
            sortable: true,
            alignmentRow: 'center',
            alignmentHeader: 'center'
        },
        banDataList            : {
            title   : 'BAN/s',
            order   : 3,
            dataType: ColumnDataTypes.Array,
            sortable: true,
            alignmentRow: 'left',
            alignmentHeader: 'center'
        },
        usersCount             : {
            title   : 'Users',
            order   : 4,
            dataType: ColumnDataTypes.Text,
            sortable: true,
            alignmentRow: 'left',
            alignmentHeader: 'center'
        },
        serviceType            : {
            title   : 'Service',
            order   : 5,
            dataType: ColumnDataTypes.Text,
            sortable: true,
            alignmentRow: 'left',
            alignmentHeader: 'center'
        },
        formattedCreationDate  : {
            title      : 'Created On',
            order      : 6,
            dataType   : ColumnDataTypes.Date,
            sortable   : true,
            sortByField: 'creationDate',
            alignmentRow: 'center',
            alignmentHeader: 'center'
        },
        formattedLastUpdateDate: {
            title      : 'Last Modified',
            order      : 7,
            dataType   : ColumnDataTypes.Date,
            sortable   : true,
            sortByField: 'lastUpdateDate',
            alignmentRow: 'center',
            alignmentHeader: 'center'
        },
        actions                : {
            order    : 8,
            dataType : ColumnDataTypes.Icon,
            iconClass: 'icon-dots-three-vertical',
            clickable: true,
            // width    : '3em'
            alignmentRow: 'center',
            alignmentHeader: 'center'
        },
    },
    rows   : {}
};
