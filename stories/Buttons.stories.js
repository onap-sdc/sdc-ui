import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button.js';
import HTMLButtonPrimary from '../components/button/button-primary.html';
import HTMLButtonWhite from '../components/button/button-white.html';
import HTMLButtonGray from '../components/button/button-gray.html';
import HTMLButtonPositive from '../components/button/button-positive.html';
import HTMLButtonNegative from '../components/button/button-negative.html';
import HTMLButtonWarning from '../components/button/button-warning.html';

let examples = {
        Primary: {
            jsx: <ReactButton>Click Me</ReactButton>,
            html: HTMLButtonPrimary
        },
        White: {
            jsx: <ReactButton type='white'>Click Me</ReactButton>,
            html: HTMLButtonWhite
        },
        Gray: {
            jsx: <ReactButton type='gray'>Click Me</ReactButton>,
            html: HTMLButtonGray
        },
        Positive: {
            jsx: <ReactButton type='positive'>Click Me</ReactButton>,
            html: HTMLButtonPositive
        },
        Negative: {
            jsx: <ReactButton type='negative'>Click Me</ReactButton>,
            html: HTMLButtonNegative
        },
        Warning: {
            jsx: <ReactButton type='warning'>Click Me</ReactButton>,
            html: HTMLButtonWarning
        }
    };

const Buttons = () => (
    <Examples examples={examples} />
);

export default Buttons;