import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

class Input extends React.Component {
    render() {
        let {
            className,
            disabled,
            errorMessage,
            readOnly,
            label,
            name,
            type,
            placeholder,
            isRequired
        } = this.props;
        let dataTestId = this.props['data-test-id'];
        let inputClasses = `sdc-input__input ${errorMessage ? 'error' : ''} ${
            readOnly ? 'view-only' : ''
        }`;
        let labelClasses = `sdc-input__label ${readOnly ? 'view-only' : ''} ${
            isRequired ? 'required' : ''
        }`;

        return (
            <div className={`sdc-input ${className || ''}`}>
                <label className={labelClasses} htmlFor={name}>
                    {label}
                </label>
                <input
                    className={inputClasses}
                    disabled={disabled}
                    readOnly={readOnly}
                    type={type}
                    id={name}
                    name={name}
                    value={this.props.value}
                    placeholder={placeholder}
                    data-test-id={dataTestId}
                    onBlur={e => this.onBlur(e)}
                    onKeyDown={e => this.onKeyDown(e)}
                    onChange={e => this.onChange(e)}
                />
                {errorMessage && (
                    <div className="sdc-label__error">
                        <SVGIcon
                            label={errorMessage}
                            labelPosition="right"
                            color="negative"
                            name="exclamationTriangleFull"
                        />
                    </div>
                )}
            </div>
        );
    }

    onChange(e) {
        let { onChange, readOnly, disabled } = this.props;
        if (onChange && !readOnly && !disabled) {
            onChange(e.target.value);
        }
    }

    onBlur(e) {
        let { onBlur, readOnly } = this.props;
        if (!readOnly && onBlur) {
            onBlur(e);
        }
    }

    onKeyDown(e) {
        let { onKeyDown, readOnly } = this.props;
        if (!readOnly && onKeyDown) {
            onKeyDown(e);
        }
    }

    getValue() {
        return this.props.value;
    }
}
Input.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    type: PropTypes.oneOf(['text', 'number']),
    placeholder: PropTypes.string,
    onChange: PropTypes.func,
    onBlur: PropTypes.func,
    onKeyDown: PropTypes.func,
    errorMessage: PropTypes.string,
    readOnly: PropTypes.bool,
    isRequired: PropTypes.bool,
    disabled: PropTypes.bool,
    label: PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    className: PropTypes.string
};

Input.defaultProps = {
    type: 'text',
    readOnly: false,
    isRequired: false,
    disabled: false
};
export default Input;
