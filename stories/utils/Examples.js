import React from 'react';
import SourceToggle from './SourceToggle.js';

const Examples = ({examples}) => (
  <div className={'examples'}>
    {Object.keys(examples).map(key => {
	let title = key;
	let {jsx, html, displayTitle = true} = examples[key];
	return <SourceToggle title={displayTitle && title} jsx={jsx} html={html}  key={key} />;
})}
  </div>
);

export default Examples;
