import React, {Component} from 'react';

const typos = [
	{className: 'heading-1', size: 36, text: 'Large Titles'},
	{className: 'heading-2', size: 24, text: 'Medium Titles'},
	{className: 'heading-4-medium', size: 18, text: 'Small Titles'},
	{className: 'heading-5-medium', size: 16, text: 'Mini Titles'},
	{className: 'body-1', size: 14, text: 'Body (Running) Text'},
	{className: 'body-2', size: 13, text: 'Small Text'},
	{className: 'body-3', size: 12, text: 'Even Smaller Text'},
];

const fontWeights = ['OpenSans', 'OpenSans-Light', 'OpenSans-Italic', 'OpenSans-Semibold' ,'OpenSans-Bold'];

function TextRow({className, size, text}) {
	return (
		<div className={`typo-section ${className}`}>
			<div>{className}</div>
			<div>{size}</div>
			<div>{text}</div>
		</div>
	);
}

class Typography extends Component {

	render() {
		return (
			<div className='typography-screen'>
				<h1>Typography</h1>
				<div className='typography-section'>
					<h3>Font Family</h3>
					<ul>
						<li>OpenSans</li>
						<li style={{'fontFamily': 'Arial'}}>Arial</li>
						<li style={{'fontFamily':'sans-serif'}}>sans-serif</li>
					</ul>
				</div>
				<div className='typography-section'>
					<h3>Font Weights</h3>
					<ul>{fontWeights.map(font => <li key={font} className={font}>{font}</li>)}</ul>
				</div>
				<div className='typography-section'>
					<h3>Font Size</h3>
					<div className='typo-table'>
						<TextRow className='SCSS %.class-name' size='Size (in Pixels)' text='Sample Text'/>
						{typos.map(typo => <TextRow key={typo.className} {...typo}/>)}
					</div>
				</div>
			</div>
		);
	}

}

export default Typography;
