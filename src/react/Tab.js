import React from 'react';

class Tab extends React.Component {
	render() {
		const {activeTab, tabId, title, onClick, tabClassName = ''} = this.props;
		const dataTestId = this.props['data-test-id'];
		return (<li className={activeTab === tabId ? 'sdc-tab sdc-tab-active ' + tabClassName : 'sdc-tab ' + tabClassName}
			 onClick={onClick} data-test-id={dataTestId} role='tab'>{title}</li>);
	}
}

export default Tab;
