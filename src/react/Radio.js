import React from 'react';

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.checked ? props.checked : false
		};
	}

	render() {
		let {checked, disabled, value, label, inputRef, name} = this.props;
		let dataTestId = this.props['data-test-id'];
		return (<div className='sdc-radio'>
			<input ref={inputRef} data-test-id={dataTestId} type='radio' name={name} checked={checked}  disabled={disabled}
				   onChange={(e) => this.onChange(e)} className='sdc-radio__input' value={value} />
			<label className='sdc-radio__label'>{label}</label>
		</div>);
	}

	onChange(e) {
		let {onChange} = this.props;
		this.setState({
			checked: e.target.checked
		});
		onChange && onChange(e.target.checked);
	}

	getChecked() {
		return this.state.checked;
	}

	getValue() {
		return this.props.value;
	}
}

export default Radio;
