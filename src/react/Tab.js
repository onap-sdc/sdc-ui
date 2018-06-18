import React from 'react';

class Tab extends React.Component {
    render() {
        const {
            activeTab,
            tabId,
            title,
            onClick,
            disabled,
            className = ''
        } = this.props;
        const dataTestId = this.props['data-test-id'];
        return (
            <li
                className={`sdc-tab ${
                    activeTab === tabId ? 'sdc-tab-active' : ''
                } ${className}`}
                onClick={disabled ? undefined : onClick}
                data-test-id={dataTestId}
                role="tab"
                disabled={disabled}>
                {title}
            </li>
        );
    }
}

export default Tab;
