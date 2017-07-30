import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';
import BeautifyHTML from './BeautifyHTML.js';

const InsertSVGIcons = ({html, jsx, indentChar = '    '}) => {
	let svgCode = renderToStaticMarkup(jsx).match(/(<svg\b[^<>]*>)[\s\S]*?(<\/svg>)/g);
	let newHTML = html.replace(/\s*<!-- insert SVG -->/g, str => {
		let html = '\n' + svgCode.shift();
		let indentRegExp = new RegExp(`[${indentChar}]*`);
		let startingIndentCount = str.slice(2).match(indentRegExp)[0].length / indentChar.length;
		return BeautifyHTML({html, startingIndentCount, indentChar});
	});
	return newHTML;
};

export default InsertSVGIcons;
