import React from 'react';
import Examples from './utils/Examples.js';
import Filter from '../../src/react/Filter.js';
import Checkbox from '../../src/react/Checkbox.js';
let examples = {
    Basic: {
        jsx: <Filter><div>Filter</div><Checkbox label='filter-item' /><Checkbox checked label='filter-item-checked' /></Filter>
    }
};

const FilterStorie = () => (
    <Examples examples={examples} />
);

export default FilterStorie;