import React from 'react';
import Button from '../src/react/Button.js';
import HTMLButtonPrimary from '../components/button/button-primary.html';
import HTMLButtonWhite from '../components/button/button-white.html';

import {mount} from 'enzyme';

describe('Button', () => {
  test('Button - Primary', () => {
    const button = mount(<Button>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonPrimary);
  });

  test('Button - White', () => {
    const button = mount(<Button type='white'>Click Me</Button>);
    expect(button.html()).toEqual(HTMLButtonWhite);
  });
})


