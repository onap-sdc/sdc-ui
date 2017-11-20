import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import SourceToggle from './SourceToggle.js';
import beautifyHTML from './BeautifyHTML.js';
import insertSVGIcons from './InsertSVGIcons.js';

const Examples = ({examples}) => (
  <div className={'examples'}>
	  {Object.keys(examples).map(key => {
		let title = key;
		let {jsx, html, displayTitle = true} = examples[key];
		if (!html) {
			html = renderToStaticMarkup(jsx);
			html = beautifyHTML({html, indentChar: '  '});
		} else {
			html = insertSVGIcons({html, jsx});
		}
		return <SourceToggle title={displayTitle && title} jsx={jsx} html={html} key={key} />;
	  })}
  </div>
);

export default Examples;
