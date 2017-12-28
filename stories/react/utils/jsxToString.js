import React, {Children} from 'react';

const INDENT = '   ';

function stringRepresentationForJsx(item) {
	if (typeof item === 'string') {
		return `'${item}'`;
	} else if (typeof item === 'number') {
		return item.toString();
	} else if (Array.isArray(item)) {
		return `[${item.map(val => stringRepresentationForJsx(val)).toString()}]`;
	}
	else if (typeof item === 'boolean') {
		return item.toString();
	}
	else if (typeof item === 'function') {
		return item.toString().replace(/\s{2,}/g, ' ');
	} else if (typeof item === 'object') {
		let repr = '{';
		for (let key in item) {
			if (item.hasOwnProperty(key)) {
				repr += `${key}: ${stringRepresentationForJsx(item[key])}, `;
			}
		}
		repr = repr.slice(0, -2);
		repr += '}';
		return repr;
	}
}

function parseProps(jsx, indentCount) {
	let result = '';
	for (let prop in jsx.props) {
		let value = jsx.props[prop];
		if (prop !== 'children' && value) {
			let repr = stringRepresentationForJsx(value);
			let isString = repr.startsWith("'");
			result += `\n${INDENT.repeat(indentCount)}${prop}`;
			if (value !== true) {
				result += `=${isString ? '' : '{ '}${stringRepresentationForJsx(value)}${isString ? '' : ' }'}`;
			}
		}
	}
	return result;
}

function jsxToString({jsx, indentCount=0, exclude}) {
	if (typeof jsx === 'string'){
		return jsx;
	}
	
	let name = typeof jsx.type === 'string' ? jsx.type : jsx.type.name;	
	let result = name === exclude ? ''
		: `${INDENT.repeat(indentCount)}<${name}${parseProps(jsx, indentCount + 1)}`;

	if (jsx.props.hasOwnProperty('children')) {
		let {children} = jsx.props;
		let childrenArr = Children.toArray(children);
		if (name !== exclude) { result += '>\n';}
		if (typeof children === 'string') {
			result += `${INDENT.repeat(indentCount + 1)}${children}\n`;
		} else {
			let newIndentCount = name === exclude ? indentCount : indentCount + 1;
			childrenArr.forEach(child => result += `${jsxToString({jsx: child, indentCount: newIndentCount})}\n`);
		}
		const closingTag = name === exclude ? '' 
			: `${INDENT.repeat(indentCount)}</${name}>`;
		return result + closingTag;
	}

	return result + ' />';
}

export default jsxToString;
