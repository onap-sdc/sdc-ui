import React from 'react';
import Examples from './utils/Examples.js';

import RadioGroup from '../../src/react/RadioGroup';
import HTMLRadioGroup from '../../components/radioGroup/radio-group.html';
import HTMLRadioGroupValue from '../../components/radioGroup/radio-group-value.html';
import HTMLRadioGroupDisabled from '../../components/radioGroup/radio-group-disabled.html';
import HTMLRadioGroupNoTitle from '../../components/radioGroup/radio-group-no-title.html';

let examples = {
	'Value': {
		jsx: <RadioGroup name='grp2' value='1' title='Group B' onChange={()=>{}} data-test-id='grp2' options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />,
		html: HTMLRadioGroupValue
	},
	'No Value': {
		jsx: <RadioGroup name='grp3' title='Group C' onChange={()=>{}} data-test-id='grp3' options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />,
		html: HTMLRadioGroup
	},
	'Disabled': {
		jsx: <RadioGroup name='grp4' disabled={true} title='Group D' onChange={()=>{}} data-test-id='grp4' options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />,
		html: HTMLRadioGroupDisabled
	},
	'No title': {
		jsx: <RadioGroup name='grp5' onChange={()=>{}} data-test-id='grp4' options={[{value: '1', label: 'option 1'}, {value: '2', label: 'option 2'}]} />,
		html: HTMLRadioGroupNoTitle
	}

};

const RadioGroups = () => (
	<Examples examples={examples} />
);

export default RadioGroups;
