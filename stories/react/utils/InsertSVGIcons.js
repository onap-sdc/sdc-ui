import {renderToStaticMarkup} from 'react-dom/server';
import beautifyHTML from './BeautifyHTML.js';

const insertSVGIcons = ({html, jsx, indentChar = '    '}) => {
	let svgCode = renderToStaticMarkup(jsx).match(/(<svg\b[^<>]*>)[\s\S]*?(<\/svg>)/g);
	let newHTML = html.replace(/\s*<!-- insert SVG -->/g, str => {
		let html = '\n' + svgCode.shift();
		let indentRegExp = new RegExp(`[${indentChar}]*`);
		let startingIndentCount = str.slice(2).match(indentRegExp)[0].length / indentChar.length;
		return beautifyHTML({html, startingIndentCount, indentChar});
	});
	return newHTML;
};

export default insertSVGIcons;
