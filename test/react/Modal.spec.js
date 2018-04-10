import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import Modal from '../../src/react/Modal';

describe('Modal', () => {

	const MODAL_MESSAGE = 'Message';
	test('standard modal', ()=>{
		const modal = new ReactWrapper(mount(<Modal show={true} size='small'>
								<Modal.Header><Modal.Title>Standard Modal</Modal.Title></Modal.Header>
								<Modal.Body>
									{MODAL_MESSAGE}
								</Modal.Body>
								<Modal.Footer actionButtonText='Yes' actionButtonClick={()=>{}}/>
							</Modal>).instance().modalRef, true);

		expect(modal.find(Modal.Body).length).toBe(1);                                                                               
		expect(modal.find(Modal.Header).length).toBe(1);                                                                               
		expect(modal.find(Modal.Title).length).toBe(1);   
		expect(modal.find(Modal.Body).length).toBe(1);              
		expect(modal.find(Modal.Footer).length).toBe(1); 
		expect(modal.find(Modal.Header).props().type).toBe('info');
		expect(modal.find(Modal.Body).text()).toBe(MODAL_MESSAGE);
		expect(modal.html()).toMatchSnapshot();
	});
	
	test('standard modal - not displayed', ()=>{
		const modal = new ReactWrapper(mount(<Modal show={false} size='small'>
								<Modal.Header><Modal.Title>Standard Modal</Modal.Title></Modal.Header>
								<Modal.Body>
									 {MODAL_MESSAGE}	
								</Modal.Body>
								<Modal.Footer actionButtonText='Yes' actionButtonClick={()=>{}}/>
							</Modal>).instance().modalRef, true);		
		expect(modal.find(Modal.Body).length).toBe(0);
		expect(modal.html()).toMatchSnapshot();        
	});
	
	test('alert modal', ()=>{
		const modal = new ReactWrapper(mount(
			<Modal show type='alert' size='small'>
				<Modal.Header type='alert'><Modal.Title>Title</Modal.Title></Modal.Header>
				<Modal.Body>
					{MODAL_MESSAGE}
				</Modal.Body>
				<Modal.Footer closeButtonText='Ok'/>
		</Modal>).instance().modalRef, true);
		expect(modal.find(Modal.Body).text()).toBe(MODAL_MESSAGE);
		expect(modal.find('.sdc-modal-type-alert').length).toBe(1);
		expect(modal.html()).toMatchSnapshot();
	});
	
	test('custom modal', ()=>{
		const modal = new ReactWrapper(mount(
			<Modal show type='custom'>
				<Modal.Header type='custom'><Modal.Title>Title</Modal.Title></Modal.Header>
				<Modal.Body>
					{MODAL_MESSAGE}
				</Modal.Body>
				<Modal.Footer  actionButtonText='Ok' actionButtonClick={()=>{}}/>
			</Modal>).instance().modalRef, true);
		expect(modal.find(Modal.Body).text()).toBe(MODAL_MESSAGE);
		expect(modal.find('.sdc-modal-type-custom').length).toBe(1);
		expect(modal.html()).toMatchSnapshot();
	});

});
