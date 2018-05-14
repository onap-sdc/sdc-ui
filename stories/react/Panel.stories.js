import React from 'react';
import Examples from './utils/Examples.js';
import Panel from '../../src/react/Panel.js';
import Checkbox from '../../src/react/Checkbox.js';
import HTMLBasic from '../../components/panel/basic-panel.html';
let examples = {
    Basic: {
        jsx:
            <Panel>
                <h3>Panel</h3>
                <Checkbox label='filter-item' />
                <Checkbox checked label='filter-item-checked' />
            </Panel>,
        html: HTMLBasic
    }
};

const PanelStory = () => (
    <Examples examples={examples} />
);

export default PanelStory;
