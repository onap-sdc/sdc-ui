import React from 'react';
import Examples from './utils/Examples.js';

import SVGIcon from '../src/react/SVGIcon';
// import HTMLButtonPrimary from '../components/button/button-primary.html';
// import HTMLButtonWhite from '../components/button/button-white.html';

let examples = {
        Primary: {
            jsx: <SVGIcon label='test1' name='vendor'/>
        }        
    };

const Icons = () => (
    <Examples examples={examples} />
);

export default Icons;