import React from 'react';
import PropTypes from 'prop-types';
import ReactDom from 'react-dom';

class ModalBody extends React.Component {
	render() {
		const {children, className} = this.props;
		return (
			<div onWheel={(e) => this.onScroll(e)}className={`sdc-modal__content ${className}`} >
	         	{children}
		    </div>
		);
	}

	onScroll(e) {
		const modal = ReactDom.findDOMNode(this);

		if ((e.nativeEvent.deltaY <= 0 && modal.scrollTop <= 0) 
				|| (e.nativeEvent.deltaY > 0 && modal.scrollTop + modal.clientHeight >= modal.scrollHeight)) {
			e.preventDefault();
		}				
	}
}

ModalBody.propTypes = {
	children: PropTypes.node,
	className: PropTypes.string
};

ModalBody.defaultProps = {
	className: ''
};

export default ModalBody;