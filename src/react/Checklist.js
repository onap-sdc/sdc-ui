import React from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox.js';

const Checklist = ({ items = [], className, onChange }) => (
    <div className={className}>
        {items.map((item, index) => {
            return (
                <div key={`checkbox-item-${index}`} className="checkbox-item">
                    <Checkbox
                        key={`${item.label}${index}`}
                        label={item.label}
                        value={item.value}
                        checked={item.checked}
                        disabled={item.disabled}
                        onChange={value => {
                            let obj = {};
                            obj[item.value] = value;
                            onChange(obj);
                        }}
                        data-test-id={item.dataTestId}
                    />
                </div>
            );
        })}
    </div>
);

Checklist.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            label: PropTypes.string,
            value: PropTypes.string,
            checked: PropTypes.bool,
            disabled: PropTypes.bool,
            dataTestId: PropTypes.string
        })
    ),
    className: PropTypes.string,
    onChange: PropTypes.func
};

export default Checklist;
