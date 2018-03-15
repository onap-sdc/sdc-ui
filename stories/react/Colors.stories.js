import React, {Component} from 'react';

const colorMap = {
	'$white': '#ffffff',
	'$blue': '#009fdb',
	'$light-blue': '#1eb9f3',
	'$lighter-blue': '#e6f6fb',
	'$blue-disabled': '#9dd9ef',
	'$dark-blue': '#0568ae',
	'$black': '#000000',
	'$rich-black': '#323943',
	'$text-black': '#191919',
	'$dark-gray': '#5a5a5a',
	'$gray': '#959595',
	'$light-gray': '#d2d2d2',
	'$silver': '#eaeaea',
	'$light-silver': '#f2f2f2',
	'$green': '#4ca90c',
	'$functional-red': '#cf2a2a',
	'$yellow': '#ffb81c',
	'$dark-purple': '#702f8a',
	'$purple': '#9063cd',
	'$light-purple': '#caa2dd'
};

function Color({colorName, colorValue}) {
	return (
		<div key={colorName} className='color-section'>
			<div className='color-circle' style={{backgroundColor: colorValue}} />
			<div>{colorName.replace('$', '')}</div>
			<div>{colorValue}</div>
		</div>
	);
}

class Colors extends Component {

	render() {
		return (
			<div>
				<h1>Colors Palette</h1>
					<div className='colors-table'>
						{
							Object.keys(colorMap).map(colorName => <Color key={colorName} colorValue={colorMap[colorName]} colorName={colorName}/>)
						}
					</div>
			</div>
		);
	}

}

export default Colors;
