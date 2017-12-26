import React from 'react';
import Examples from './utils/Examples.js';
import Button from '../../src/react/Button.js';
import {Modal, modalSize}  from '../../src/react/Modal.js';

import Input from '../../src/react/Input.js';

class Example extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			show: false
		};
	}	
	render() {
		const { children } = this.props;
		const { show } = this.state;
		var childrenWithProps = React.Children.map(children, child => {
			let childChildrenWithProps = [];
			if (child.props.children) {
				let childChildren = child.props.children;
				 	childChildrenWithProps = React.Children.map(childChildren, child =>
					React.cloneElement(child, { onClose: ()=>this.setState({show: !show}) }));

			}							
			return React.cloneElement(child, { show: this.state.show, onClose: ()=>this.setState({show: !show}), children: childChildrenWithProps});
		}
		);

		return (
			<div>
				<Button onClick={() => this.setState({show: !show})}>Modal</Button>
				{show && childrenWithProps}
			</div>
		);
	}
} 


const ModalBody = () => {
	return (
	<div>
		<Input
			name='input1'
			value='Default'
			label='I am a label'			
			type='text' />
		<Input
			name='input1'
			value='Default'
			label='I am a label'			
			type='text' />
		<Input
			name='input1'
			value='Default'
			label='I am a label'			
			type='text' />
					
	</div>);
};

const BODY_TEXT = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed risus nisl, egestas vitae erat non,' +
 'pulvinar lacinia libero. Integer pulvinar pellentesque accumsan. Sed hendrerit lacus eu tempus pharetra';

const isShown = () => {};

let examples = {
	Standard: {
		jsx: <Example>
				<Modal show={() => isShown()} size='small'>
					<Modal.Header><Modal.Title>Standard Modal</Modal.Title></Modal.Header>
					<Modal.Body>
						Do you want to continue?
					</Modal.Body>
					<Modal.Footer actionButtonText='Yes' actionButtonClick={()=>{}}/>
				</Modal>
			</Example>,
		html: '',
		exclude: 'Example'
	},
	Alert: {
		jsx: <Example>
				<Modal show={() => isShown()} type='alert' size='small'>
					<Modal.Header type='alert'><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						{BODY_TEXT}	
					</Modal.Body>
					<Modal.Footer/>
				</Modal>
			</Example>,
		html: '',
		exclude: 'Example'
	},
	Error: {
		jsx: <Example>
				<Modal show={() => isShown()} size='small' type='error'>
					<Modal.Header onClose={()=>isShown(false)} type='error'><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						{BODY_TEXT}	
					</Modal.Body>
					<Modal.Footer onClose={()=>isShown(false)}/>
				</Modal>
			</Example>,
		html: '',
		exclude: 'Example'
	},
	
	Custom: {
		jsx: <Example>
				<Modal show={() => isShown()} type='custom'>
					<Modal.Header type='custom'><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						<ModalBody/>
					</Modal.Body>
					<Modal.Footer  actionButtonText='Ok' actionButtonClick={()=>{}}/>
				</Modal>
			</Example>,
		exclude: 'Example'					 
	}
};

const Modals = () => (
    <Examples examples={examples}/>
);

export default Modals;