import React from 'react';
import { action } from '@storybook/addon-actions';
import ReactInput from '../../src/react/Input.js';
import RadioGroup from '../../src/react/RadioGroup.js';

const Form = () => (
	<div>
		Test Form<br/>
		<ReactInput label='This is a text element' value='initial' onChange={ action('input-change') }/>
		<ReactInput label='This is a text element with an error' errorMessage='This is an error' value='initial' onChange={ action('input-change') }/>
		<RadioGroup name='grp2' value='1' title='Group B' onChange={action('radio-change')} data-test-id='grp2' options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />
		<div id='logger'></div>
	</div>
);

export default Form;
