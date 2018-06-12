import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

class Portal extends React.Component {
    componentDidMount() {
        this.renderPortal();
    }
    componentDidUpdate() {
        this.renderPortal();
    }

    componentWillUnmount() {
        if (this.defaultNode) {
            document.body.removeChild(this.defaultNode);
        }
        this.defaultNode = null;
        this.portal = null;
    }

    renderPortal() {
        if (!this.defaultNode) {
            this.defaultNode = document.createElement('div');
            this.defaultNode.className = 'onap-sdc-portal';
            document.body.appendChild(this.defaultNode);
        }

        let children = this.props.children;
        if (typeof this.props.children.type === 'function') {
            children = React.cloneElement(this.props.children);
        }
        /**
         * Change this to ReactDOM.CreatePortal after upgrading to React 16
         */
        this.portal = ReactDOM.unstable_renderSubtreeIntoContainer(
            this,
            children,
            this.defaultNode
        );
    }
    render() {
        return null;
    }
}

Portal.propTypes = {
    children: PropTypes.node.isRequired
};

export default Portal;
