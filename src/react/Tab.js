import React from 'react';

class Tab extends React.Component {
	render() {
		const {activeTab, tabId, title, onClick, disabled, className = ''} = this.props;
		const dataTestId = this.props['data-test-id'];
		return (<li className={activeTab === tabId ? 'sdc-tab sdc-tab-active ' + className : 'sdc-tab ' + className}
			 onClick={onClick} data-test-id={dataTestId} role='tab' disabled={disabled}>{title}</li>);
	}
}

export default Tab;
