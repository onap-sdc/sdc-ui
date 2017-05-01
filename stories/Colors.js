import React, {Component} from 'react';

const primaryColors = {
	$blue: '#009fdb',
	'$dark-blue': '#0568ae',
	'$light-blue': '#71c5e8',
	$green: '#4ca90c',
	'$dark-green': '#007a3e',
	'$light-green': '#b5bd00',
	$orange: '#ea7400',
	$yellow: '#ffb81c',
	'$dark-purple': '#702f8a',
	$purple: '#9063cd',
	'$light-purple': '#caa2dd',
	$black: '#000000',
	'$dark-gray': '#5a5a5a',
	$gray: '#959595',
	'$light-gray': '#d2d2d2',
	$white: '#ffffff'
};

const secondaryColors = {
	$red: '#cf2a2a',
	$crimson: '#a94442',
	'$background-alice-blue': '#e5f5fb',
	'$background-gray': '#f2f2f2',
	'$text-black': '#191919',
	'$link-blue': '#056bae',
	'$functional-green': '#007a3e',
	'$functional-yellow': '#ffb81c',
	'$tlv-gray': '#f8f8f8',
	'$tlv-light-gray': '#eaeaea',
	'$tlv-hover': '#e6f6fb',
	'$highlight-gray': '#eceff3'
};

function Color({colorName, palette}) {
	return (
		<div key={colorName} className='color-section'>
			<div className='color-circle' style={{backgroundColor: palette[colorName]}}></div>
			<div>{colorName.replace('$', '')}</div>
			<div>{palette[colorName]}</div>
		</div>
	);
}

class Colors extends Component {

	render() {
		return (
			<div>
				<h1>Colors Palette</h1>
				<p>
					<h3>Primary Colors</h3>
					<div className='colors-table'>
						{
							Object.keys(primaryColors).map(colorName => <Color palette={primaryColors} colorName={colorName}/>)
						}
					</div>
				</p>
				<p>
					<h3>Secondary Colors</h3>
					<div className='colors-table'>
						{
							Object.keys(secondaryColors).map(colorName => <Color palette={secondaryColors} colorName={colorName}/>)
						}
					</div>
				</p>
			</div>
		);
	}

}

export default Colors;
