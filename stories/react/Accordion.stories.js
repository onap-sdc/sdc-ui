import React from 'react';
import Examples from './utils/Examples.js';
import Accordion from '../../src/react/Accordion.js';
let examples = {
    Basic: {
        jsx: <Accordion title='Accordion Title'><div>Accordion body</div></Accordion>
    }
};

const Checkboxes = () => (
    <Examples examples={examples} />
);

export default Checkboxes;