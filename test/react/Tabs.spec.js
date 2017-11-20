import React from 'react';
import Tab from '../../src/react/Tab.js';
import Tabs from '../../src/react/Tabs.js';

import renderer from 'react-test-renderer';
import {mount} from 'enzyme';

class TabsForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {tabId: '1'};

		this.handleChange = this.handleChange.bind(this);
	}

	handleChange(val) {
		this.setState({tabId: val});
	}

	render() {
		return (
			<form >
				<fieldset disabled={this.props.disabled}>
					<Tabs ref={(tabs) => this.tabsInst = tabs} activeTab={this.state.tabId} onTabClick={this.handleChange} >
						<Tab title='tab 1' tabId='1' data-test-id='1'>Tab #1</Tab>
						<Tab title='tab 2' tabId='2' data-test-id='2'>Tab #2</Tab>
						<Tab title='tab 3'  tabId='3' data-test-id='3'>Tab #3</Tab>
					</Tabs>
				</fieldset>

			</form>
		);
	}
}

describe('Tabs', () => {

	test('Tabs - basic rendering', () => {
		const tabs = renderer.create(<TabsForm disabled={false} />).toJSON();
		expect(tabs).toMatchSnapshot();
	});

	test('Tabs - when active tab id is changed, the respective tab is shown', () => {
		const tabs = mount(<TabsForm disabled={false} />);
		expect(tabs.instance().tabsInst.props.activeTab).toEqual('1');
		expect(tabs.find('.sdc-tab-content').text()).toEqual('Tab #1');
		expect(tabs.find('li[data-test-id="1"]').hasClass('sdc-tab-active')).toBeTruthy();
		tabs.find('li[data-test-id="2"]').simulate('click');
		expect(tabs.instance().tabsInst.props.activeTab).toEqual('2');
		expect(tabs.find('li[data-test-id="2"]').hasClass('sdc-tab-active')).toBeTruthy();
		expect(tabs.find('li[data-test-id="1"]').hasClass('sdc-tab-active')).not.toBeTruthy();
		expect(tabs.find('.sdc-tab-content').text()).toEqual('Tab #2');
	});

});
