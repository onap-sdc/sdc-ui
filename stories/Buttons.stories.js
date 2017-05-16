import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../src/react/Button.js';

import HTMLButtonDefaultPrimary from '../components/button/button-default-primary.html';
import HTMLButtonDefaultWhite from '../components/button/button-default-white.html';
import HTMLButtonDefaultGray from '../components/button/button-default-gray.html';
import HTMLButtonDefaultPositive from '../components/button/button-default-positive.html';
import HTMLButtonDefaultNegative from '../components/button/button-default-negative.html';
import HTMLButtonDefaultWarning from '../components/button/button-default-warning.html';

import HTMLButtonOutlinePrimary from '../components/button/button-outline-primary.html';
import HTMLButtonOutlineGray from '../components/button/button-outline-gray.html';
import HTMLButtonOutlinePositive from '../components/button/button-outline-positive.html';
import HTMLButtonOutlineNegative from '../components/button/button-outline-negative.html';

let examples = {

    // Default buttons
    'Primary Default': {
        jsx: <ReactButton>Click Me</ReactButton>,
        html: HTMLButtonDefaultPrimary
    },
    'White Default': {
        jsx: <ReactButton color='white'>Click Me</ReactButton>,
        html: HTMLButtonDefaultWhite
    },
    'Gray Default': {
        jsx: <ReactButton color='gray'>Click Me</ReactButton>,
        html: HTMLButtonDefaultGray
    },
    'Positive Default': {
        jsx: <ReactButton color='positive'>Click Me</ReactButton>,
        html: HTMLButtonDefaultPositive
    },
    'Negative Default': {
        jsx: <ReactButton color='negative'>Click Me</ReactButton>,
        html: HTMLButtonDefaultNegative
    },
    'Warning Default': {
        jsx: <ReactButton color='warning'>Click Me</ReactButton>,
        html: HTMLButtonDefaultWarning
    },

    // Outline buttons
    'Primary Outline': {
        jsx: <ReactButton type='outline'>Click Me</ReactButton>,
        html: HTMLButtonOutlinePrimary
    },
    'Gray Outline': {
        jsx: <ReactButton type='outline' color='gray'>Click Me</ReactButton>,
        html: HTMLButtonOutlineGray
    },
    'Positive Outline': {
        jsx: <ReactButton type='outline' color='positive'>Click Me</ReactButton>,
        html: HTMLButtonOutlinePositive
    },
    'Negative Outline': {
        jsx: <ReactButton type='outline' color='negative'>Click Me</ReactButton>,
        html: HTMLButtonOutlineNegative
    }
};

const Buttons = () => (
    <Examples examples={examples} />
);

export default Buttons;
