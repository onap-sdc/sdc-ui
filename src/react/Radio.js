import React from 'react';
import PropTypes from 'prop-types';

class Radio extends React.Component {
    render() {
        let {
            checked,
            disabled,
            value,
            label,
            className,
            inputRef,
            name
        } = this.props;
        let dataTestId = this.props['data-test-id'];
        return (
            <div className={`sdc-radio ${className}`}>
                <label>
                    <input
                        ref={inputRef}
                        className="sdc-radio__input"
                        value={value}
                        data-test-id={dataTestId}
                        type="radio"
                        name={name}
                        checked={checked}
                        onChange={e => this.onChange(e)}
                        disabled={disabled}
                    />
                    <span className="sdc-radio__label">{label}</span>
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

Radio.propTypes = {
    checked: PropTypes.bool,
    value: PropTypes.any,
    label: PropTypes.string,
    className: PropTypes.string,
    inputRef: PropTypes.func,
    name: PropTypes.string,
    disabled: PropTypes.bool
};

Radio.defaultProps = {
    checked: false,
    className: ''
};

export default Radio;
