import React from 'react';
import Radio from './Radio.js';

class RadioGroup extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			value: (props.value ? props.value : (props.defaultValue ? props.defaultValue : undefined))
		};
		this.radios = {};
	}

	render() {
		let {name, disabled, title, options} = this.props;
		let dataTestId = this.props['data-test-id'];
		return (<div data-test-id={dataTestId} className='sdc-radio-group'>
			{ title && <label className='sdc-radio-group__legend'>{title}</label> }
			<div className='sdc-radio-group__radios'>
			{options.map(option => {
				let rName = name + '_' + option.value;
				return (<Radio ref={(radio) => {this.radios[rName] = radio;}} data-test-id={dataTestId + '_' + option.value}
						   key={rName} value={option.value}
						   label={option.label} checked={this.state.value === option.value} disabled={disabled}
						   name={name} onChange={(e) => this.onChange(rName)} />
			);})}
			</div>
		</div>);
	}

	onChange(rName) {
		let {onChange} = this.props;
		let val = this.radios[rName].getValue();
		this.setState({
			value: val
		});
		onChange && onChange(val);
	}

	getValue() {
		return this.state.value;
	}
}

export default RadioGroup;
