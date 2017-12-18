import React from 'react';
import Examples from './utils/Examples.js';

import ReactButton from '../../src/react/Button.js';

let examples = {
	'Primary': {
		jsx: <ReactButton onClick={() => {}}>Click Me</ReactButton>
	},
	'Primary Disabled': {
		jsx: <ReactButton onClick={() => {}} disabled>Click Me</ReactButton>,
		displayTitle: false
	},
	'Secondary': {
		jsx: <ReactButton btnType='secondary' onClick={() => {}}>Click Me</ReactButton>
	},
	'Secondary Disabled': {
		jsx: <ReactButton btnType='secondary' onClick={() => {}} disabled>Click Me</ReactButton>,
		displayTitle: false
	},
	'Link': {
		jsx: <ReactButton btnType='link' onClick={() => {}}>Click Me</ReactButton>,
	},
	'Link Disabled': {
		jsx: <ReactButton btnType='link' onClick={() => {}} disabled>Click Me</ReactButton>,
		displayTitle: false
	}
};

const DefaultButtons = () => (
	<Examples examples={examples} />
);

export default DefaultButtons;
