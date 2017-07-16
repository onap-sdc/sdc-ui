import React from 'react';

class Checkbox extends React.Component {
	render() {
		let {checked = false, disabled, value, label, inputRef, className, name} = this.props;
		let dataTestId = this.props['data-test-id'];
		return (<div className={`sdc-checkbox ${className || ''}`}>
			<input ref={inputRef} data-test-id={dataTestId} type='checkbox' checked={checked}  disabled={disabled}
				   name={name} value={value} onChange={(e) => this.onChange(e)} className='sdc-checkbox__input' />
			<label className='sdc-checkbox__label'>{label}</label>
		</div>);
	}

	onChange(e) {
		let {onChange} = this.props;
		if (onChange) {
			onChange(e.target.checked);
		}
	}

	getChecked() {
		return this.props.checked;
	}

	getValue() {
		return this.props.value;
	}
}

export default Checkbox;
