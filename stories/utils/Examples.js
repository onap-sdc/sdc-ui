import React from 'react';
import SourceToggle from './SourceToggle.js';

const Examples = ({examples}) => (
  <div className='examples'>
    {Object.keys(examples).map(key => {
      let title = key;
      let {jsx, html, angular2} = examples[key];
      return <SourceToggle title={title} jsx={jsx} html={html} angular2={angular2} />
    })}
  </div>
);

export default Examples;