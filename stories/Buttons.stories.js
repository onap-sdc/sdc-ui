import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button.js';
import HTMLButtonPrimary from '../components/button/button-primary.html';
import HTMLButtonWhite from '../components/button/button-white.html';

let examples = {
        Primary: {
            jsx: <ReactButton>Click Me</ReactButton>,
            html: HTMLButtonPrimary
        },
        White: {
            jsx: <ReactButton type='white'>Click Me</ReactButton>,
            html: HTMLButtonWhite
        }
    };

const Buttons = () => (
    <Examples examples={examples} />
);

export default Buttons;