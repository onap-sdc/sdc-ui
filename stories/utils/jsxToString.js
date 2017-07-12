import React from 'react';

const INDENT = '  ';

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
		return item.toString();
	} else if (typeof item === 'object') {
		let repr = '{';
		for (let key in item) {
			repr += `${key}: ${stringRepresentationForJsx(item[key])}, `;
		}
		repr = repr.slice(0, repr.length - 2);
		repr += '}';
		return repr;
	}
}

function parseProps(jsx) {
	let result = '';
	for (let prop in jsx.props) {
		let value = jsx.props[prop];
		if (prop !== 'children' && value) {
			let repr = stringRepresentationForJsx(value);
			let isString = repr.startsWith("'");
			result += '\n' + INDENT + `${prop}=${isString ? '' : '{ '}${stringRepresentationForJsx(value)}${isString ? '' : ' }'} `;
		}
	}
	return result;
}

function jsxToString(jsx) {
	if (typeof jsx === 'string'){
		return jsx;
	}

	let name = typeof jsx.type === 'string' ? jsx.type : jsx.type.name;

	if (jsx.props.hasOwnProperty('children')) {
		let result = `<${name} ${parseProps(jsx)}>\n`;
		if (React.isValidElement(jsx.props.children)) {
			result += `${jsxToString(jsx.props.children)}\n`;
		} else if (typeof jsx.props.children === 'string') {
			result += INDENT + jsx.props.children;
		}
		else {
			jsx.props.children.map(child => { result += `${jsxToString(child)}\n`;} );
		}
		return result + `\n</${name}>` ;
	}

	return `<${name} ${parseProps(jsx)}/>`;
}

export default jsxToString;
