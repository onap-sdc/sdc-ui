import React from 'react';
import {mount} from 'enzyme';
import Portal from '../../src/react/Portal';

describe('Portal',()=>{
	test('portal basic', ()=>{                 
		const portal = mount(<Portal><strong>Message</strong></Portal>);        
		expect(portal.find(Portal).exists()).toBe(true);       
    });    
});