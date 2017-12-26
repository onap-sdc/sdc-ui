import React, {Component} from 'react';

const typos = [
	{className: 'heading-1', size: 28, text: 'Major Section Heading'},
	{className: 'heading-2', size: 24, text: 'Sub-Section Heading'},
	{className: 'heading-3', size: 20, text: 'Small Heading'},
	{className: 'heading-4', size: 16, text: 'Small Heading'},
	{className: 'heading-4-emphasis', size: 16, text: 'Small Heading'},
	{className: 'heading-5', size: 14, text: 'Small Heading'},
	{className: 'body-1', size: 14, text: 'Body (Standard) Text'},
	{className: 'body-1-italic', size: 14, text: 'Body (Standard) Text'},
	{className: 'body-2', size: 13, text: 'Text in Tables'},
	{className: 'body-2-emphasis', size: 13, text: 'Text in Tables'},
	{className: 'body-3', size: 12, text: 'Input Labels, Table Titles'},
	{className: 'body-3-emphasis', size: 12, text: 'Even Smaller Text'},
	{className: 'body-4', size: 10, text: 'Even Much Smaller Text'}
];

const fontWeights = ['OpenSans Regular 400', 'OpenSans Semibold 600'];

function TextRow({className, size, text}) {
	return (
		<div className={`typo-section ${className}`}>
			<div>{className}</div>
			<div>{size}px</div>
			<div className='sample-text'>{text}</div>
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
						<TextRow className='SCSS mixin name (@include ....)' size='Size (in Pixels)' text='Sample Text'/>
						{typos.map(typo => <TextRow key={typo.className} {...typo}/>)}
					</div>
				</div>
			</div>
		);
	}

}

export default Typography;
