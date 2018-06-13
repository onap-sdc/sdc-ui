import React from 'react';

class TabPane extends React.Component {
    render() {
        const { children } = this.props;
        return (
            <div className="sdc-tab-content" role="tabpanel">
                {children}
            </div>
        );
    }
}

export default TabPane;
