import React from 'react';
import Examples from './utils/Examples.js';
import Button from '../../src/react/Button.js';
import Modal  from '../../src/react/Modal.js';
import Input from '../../src/react/Input.js';
import HTMLStandardModal from '../../components/modal/standard-modal.html';
import HTMLAlertModal from '../../components/modal/alert-modal.html';
import HTMLErrorModal from '../../components/modal/error-modal.html';
import HTMLCustomModal from '../../components/modal/custom-modal.html';

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
				{childrenWithProps}
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

const isShown = false;

let examples = {
	Standard: {
		jsx: <Example>
				<Modal show={() => isShown()} size='small'>
					<Modal.Header><Modal.Title>Standard Modal</Modal.Title></Modal.Header>
					<Modal.Body>
						{BODY_TEXT}
					</Modal.Body>
					<Modal.Footer actionButtonText='Yes' actionButtonClick={()=>{}}/>
				</Modal>
			</Example>,
		html: HTMLStandardModal,		
		exclude: 'Example',
		renderFromJsx: true
	},
	Alert: {
		jsx: <Example>
				<Modal show={() => isShown()} type='alert' size='small'>
					<Modal.Header type='alert'><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						{BODY_TEXT}	
					</Modal.Body>
					<Modal.Footer closeButtonText='Ok'/>
				</Modal>
			</Example>,
		html: HTMLAlertModal,
		exclude: 'Example',
		renderFromJsx: true
	},
	Error: {
		jsx: <Example>
				<Modal show={() => isShown()} size='small' type='error'>
					<Modal.Header onClose={()=>isShown(false)} type='error'><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						{BODY_TEXT}	
					</Modal.Body>
					<Modal.Footer onClose={()=>isShown(false)} closeButtonText='Ok'/>
				</Modal>
			</Example>,
		html: HTMLErrorModal,
		exclude: 'Example',
		renderFromJsx: true
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
		html: HTMLCustomModal,	
		exclude: 'Example',
		renderFromJsx: true					 
	}
};

const Modals = () => (
    <Examples examples={examples}/>
);

export default Modals;