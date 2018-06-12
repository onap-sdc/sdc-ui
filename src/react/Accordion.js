import React from 'react';
import PropTypes from 'prop-types';
import SVGIcon from './SVGIcon.js';

class Accordion extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: props.defaultExpanded
        };
    }
    render() {
        const { children, title, className, dataTestId } = this.props;
        const { open } = this.state;
        return (
            <div className={`sdc-accordion ${className}`}>
                <div
                    data-test-id={dataTestId}
                    onClick={() => this.setState({ open: !open })}
                    className="sdc-accordion-header">
                    <SVGIcon
                        name="chevronDown"
                        iconClassName={open ? 'down' : ''}
                    />
                    <div className="title">{title}</div>
                </div>
                <div className={`sdc-accordion-body ${open ? 'open' : ''}`}>
                    {children}
                </div>
            </div>
        );
    }
}

Accordion.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node,
    expandByDefault: PropTypes.bool,
    dataTestId: PropTypes.string
};

Accordion.defaultProps = {
    title: '',
    className: '',
    defaultExpanded: false
};

export default Accordion;
