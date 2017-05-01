import React from 'react';
import SourceToggle from './utils/SourceToggle.js';
import ReactButton from '../src/react/Button';
import HTMLButtonPrimary from '../components/button/button-primary.html';

const Button = () => (
    <SourceToggle jsx={<ReactButton>Click Me</ReactButton>} html={HTMLButtonPrimary} />
);

export default Button;