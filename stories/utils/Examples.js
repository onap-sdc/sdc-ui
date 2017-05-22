import React from 'react';
import SourceToggle from './SourceToggle.js';

const Examples = ({examples}) => (
  <div className='examples'>
    {Object.keys(examples).map(key => {
      let title = key;
      let {jsx, html} = examples[key];
      return <SourceToggle title={title} jsx={jsx} html={html}  key={key} />
    })}
  </div>
);

export default Examples;
