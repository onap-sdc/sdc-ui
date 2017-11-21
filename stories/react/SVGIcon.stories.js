import React from 'react';
import Examples from './utils/Examples.js';
import DropdownMenu from './utils/components/DropdownMenu.js';
import SVGIcon from '../../src/react/SVGIcon.js';

const iconLabelPositions = [
	'', 'bottom', 'top', 'left', 'right'
];

const iconColors = [
	'',
	'primary',
	'secondary',
	'positive',
	'negative',
	'warning'
];

const disabledStates = ['false', 'true'];

function buildExamples({iconName, iconLabel, labelPosition, color, disabled}) {
	return {
		Example: {
			jsx: <SVGIcon
				label={iconLabel}
				labelPosition={labelPosition}
				color={color}
				name={iconName}
				disabled={disabled === 'true'} />
		}
	};
}

const IconTable = ({onClick}) => (
	<div className='icons-table'>
		{ICON_NAMES.map(icon => (
			<div key={icon} className='icon-section'>
				<SVGIcon
					onClick={() => onClick(icon)}
					label={icon}
					iconClassName='storybook-small'
					name={icon} />
			</div>
		))}
	</div>
);

class Icons extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			iconName: ICON_NAMES[0],
			iconLabel: '',
			labelPosition: iconLabelPositions[0],
			color : iconColors[0]
		};
	}

	render() {
		let {iconName, iconLabel, labelPosition, color, disabled} = this.state;
		return (
			<div className='icons-screen'>
				<h1>Icons</h1>
				<div className='icons-option-selector'>
					<DropdownMenu
						title='Icon name'
						value={iconName}
						onChange={e => this.setState({iconName: e.target.value})}
						options={ICON_NAMES} />
					<div className='option-container'>
						<label>Icon label</label>
						<input value={iconLabel} onChange={e => this.setState({iconLabel: e.target.value})}/>
					</div>
					<DropdownMenu
						title='Label position'
						value={labelPosition}
						onChange={e => this.setState({labelPosition: e.target.value})}
						options={iconLabelPositions} />
					<DropdownMenu
						title='Color'
						value={color}
						onChange={e => this.setState({color: e.target.value})}
						options={iconColors} />
					<DropdownMenu
						title='Disabled'
						value={disabled}
						onChange={e => this.setState({disabled: e.target.value})}
						options={disabledStates} />
				</div>
				<Examples examples={buildExamples({iconName, iconLabel, labelPosition, color, disabled})} />
				<IconTable onClick={icon => this.setState({iconName: icon})} />
				<div className='missing-icon-section'>
					<div >You will see the following if the icon name you used is not found:</div>
					<SVGIcon
						onClick={() => {}}
						name='MissingIcon' />
				</div>
			</div>
		);
	};
}

export default Icons;
