import React from 'react';
import Button from '../src/react/Button.js';

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

import {mount} from 'enzyme';

describe('Button', () => {
  test('Button - Default - Primary', () => {
    const button = mount(<Button>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultPrimary);
  });

  test('Button - Default - White', () => {
    const button = mount(<Button color='white'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultWhite);
  });

  test('Button - Default - Gray', () => {
    const button = mount(<Button color='gray'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultGray);
  });

  test('Button - Default - Positive', () => {
    const button = mount(<Button color='positive'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultPositive);
  });

  test('Button - Default - Negative', () => {
    const button = mount(<Button color='white'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultNegative);
  });

  test('Button - Default - Warning', () => {
    const button = mount(<Button color='gray'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonDefaultWarning);
  });

  test('Button - Outline - Primary', () => {
    const button = mount(<Button type='outline'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonOutlinePrimary);
  });

  test('Button - Outline - Gray', () => {
    const button = mount(<Button type='outline' color='gray'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonOutlineGray);
  });

  test('Button - Outline - Positive', () => {
    const button = mount(<Button type='outline' color='positive'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonOutlinePositive);
  });

  test('Button - Outline - Negative', () => {
    const button = mount(<Button type='outline' color='negative'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonOutlineNegative);
  });
});
