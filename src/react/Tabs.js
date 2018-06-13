import React from 'react';
import TabPane from './TabPane.js';

class Tabs extends React.Component {
    render() {
        const {
            type,
            children = [],
            activeTab,
            onTabClick,
            className
        } = this.props;
        return (
            <div
                className={
                    type === 'header'
                        ? `sdc-tabs sdc-tabs-header ${className || ''}`
                        : `sdc-tabs sdc-tabs-menu ${className || ''}`
                }>
                <ul className="sdc-tabs-list" role="tablist">
                    {children.map(child =>
                        React.cloneElement(child, {
                            key: child.props.tabId,
                            onClick: () => onTabClick(child.props.tabId),
                            activeTab
                        })
                    )}
                </ul>
                <TabPane>
                    {children.map(child => {
                        if (child.props.tabId === activeTab) {
                            return child.props.children;
                        }
                    })}
                </TabPane>
            </div>
        );
    }
}

export default Tabs;
