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
		if (prop !== 'children') {
			let repr = stringRepresentationForJsx(value);
			let isString = repr.startsWith("'");
			result += `\n	 ${prop}=${isString ? '' : '{ '}${stringRepresentationForJsx(value)}${isString ? '' : ' }'} `;
		}
	}
	return result;
}

function jsxToString(jsx) {
	if (typeof jsx === 'string'){
		return jsx;
	}

	let name = jsx.type.name;

	if (jsx.props.hasOwnProperty('children')) {
		return `<${name}${parseProps(jsx)}>\n	 ${jsxToString(jsx.props.children)}\n</${name}>`;
	}

	return `<${name} ${parseProps(jsx)}/>`;
}

export default jsxToString;
