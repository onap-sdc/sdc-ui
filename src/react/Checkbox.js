import React from 'react';

class Checkbox extends React.Component {
    render() {
        let {
            checked = false,
            disabled,
            value,
            label,
            inputRef,
            className,
            name
        } = this.props;
        let dataTestId = this.props['data-test-id'];

        return (
            <div className={`sdc-checkbox ${className || ''}`}>
                <label>
                    <input
                        className="sdc-checkbox__input"
                        ref={inputRef}
                        data-test-id={dataTestId}
                        type="checkbox"
                        checked={checked}
                        name={name}
                        value={value}
                        onChange={e => this.onChange(e)}
                        disabled={disabled}
                    />
                    <span className="sdc-checkbox__label">{label}</span>
                </label>
            </div>
        );
    }

    onChange(e) {
        let { onChange } = this.props;
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
