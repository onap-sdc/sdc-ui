import React from 'react';

class Checkbox extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			checked: props.checked ? props.checked : false
		};
	}

	render() {
		let {checked, disabled, value, label, inputRef, name} = this.props;
		let dataTestId = this.props['data-test-id'];
		return (<div className='sdc-checkbox'>
			<input ref={inputRef} data-test-id={dataTestId} type='checkbox' checked={checked}  disabled={disabled}
				   name={name} value={value} onChange={(e) => this.onChange(e)} className='sdc-checkbox__input' />
			<label className='sdc-checkbox__label'>{label}</label>
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

export default Checkbox;
