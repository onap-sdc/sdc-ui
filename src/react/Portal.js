import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
    constructor(props) {
        super(props);
        this.el = document.createElement('div');
        this.el.className = 'onap-sdc-portal';
    }

    componentDidMount() {
        document.body.appendChild(this.el);
    }

    componentWillUnmount() {
        document.body.removeChild(this.el);
    }

    render() {
        let { children } = this.props;

        if (typeof children.type === 'function') {
            children = React.cloneElement(children);
        }

        return ReactDOM.createPortal(children, this.el);
    }
}

Portal.propTypes = {
    children: PropTypes.node.isRequired
};

export default Portal;
