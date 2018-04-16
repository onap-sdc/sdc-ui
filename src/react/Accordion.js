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
    const { children, title, className } = this.props;
    const { open } = this.state;
    return (
      <div className={`sdc-accordion ${className}`} data-test-id={this.props['data-test-id']}>
        <div onClick={() => this.setState({ open: !open })} className='sdc-accordion-header'>
          <SVGIcon name='chevronUp' iconClassName={open ? 'down' : ''} />
          <div className='title'>{title}</div>
        </div>
        <div className={`sdc-accordion-body ${open ? 'open' : ''}`}>{children}</div>
      </div>
    );
  }
}

Accordion.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
  expandByDefault: PropTypes.bool
};

Accordion.defaultProps = {
  title: '',
  className: '',
  defaultExpanded: false
};

export default Accordion;
