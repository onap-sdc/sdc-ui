import React from 'react';
import Examples from './utils/Examples.js';
import SVGIcon from '../src/react/SVGIcon.js';
import HTMLSvgIcon from '../components/icon/svg-icon.html';

const iconLabelPositions = [
	'bottom', 'top', 'left', 'right'
];

function buildExamples(iconName, iconLabel, labelPosition) {
	return {
		Example: {
			jsx: <SVGIcon label={iconLabel} labelPosition={labelPosition} iconClassName='storybook-big'
				  name={iconName}/>,
			html: HTMLSvgIcon
		}
	};
}

const SelectOption = ({option}) => {
	return (
		<option key={option} value={option}>{option}</option>
	);
};

const IconsList = ({icons}) => {
	return (
		<div className='icons-table'>
			{
				icons.map(icon => (<div className='icon-section'><SVGIcon label={icon}
					 iconClassName='storybook-small'
					 name={icon}/></div>))
			}
		</div>
	);
};

class Icons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconName: ICON_NAMES[0],
			iconLabel: '',
			labelPosition: iconLabelPositions[0]
		};
	}

	render() {
		return (
			<div className='icons-screen'>
				<h1>Icons</h1>
				<div className='icons-option-selector'>
					<div className='option-container'>
						<label>Icon name:</label>
						<select onChange={e => this.setState({iconName: e.target.value})}>{ICON_NAMES.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
					<div className='option-container'>
						<label>Icon label</label>
						<input value={this.state.iconLabel} onChange={e => this.setState({iconLabel: e.target.value})}/>
					</div>
					<div className='option-container'>
						<label>Label position</label>
						<select
							onChange={e => this.setState({labelPosition: e.target.value})}>{iconLabelPositions.map(option =>
							<SelectOption option={option}/>)}</select>
					</div>
				</div>
				<Examples
					examples={buildExamples(this.state.iconName, this.state.iconLabel, this.state.labelPosition)}/>
				<IconsList icons={ICON_NAMES}/>
			</div>
		);
	};
}

export default Icons;
