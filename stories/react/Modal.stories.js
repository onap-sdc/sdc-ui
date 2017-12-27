import React from 'react';
import Examples from './utils/Examples.js';
import Button from '../../src/react/Button.js';
import Modal from '../../src/react/Modal.js';
import Input from '../../src/react/Input.js';


class ExampleWrapper extends React.Component {
	constructor () {
		super();
		this.state = {
			show: false
		};
	}	
	render() {        
		const {type, size, children, actionButtonText, actionButtonClick} = this.props;
		return (
            <div>
                <Button onClick={()=>{this.setState({show: true});}}>Show Modal</Button>
                <Modal show={this.state.show} size={size}>
					{
						!type ? 	
						<Modal.Header onClose={()=>{this.setState({show: false});}}><Modal.Title>Title</Modal.Title></Modal.Header>
						:
						<Modal.PopupHeader onClose={()=>{this.setState({show: false});}} modalType={type}><Modal.Title className='popup'>Title</Modal.Title></Modal.PopupHeader>
					}
					<Modal.Body className={type ? 'popup' : ''}>{children}</Modal.Body>
					<Modal.Footer actionButtonText={actionButtonText} actionButtonClick={actionButtonClick} onClose={()=>{this.setState({show: false});}} />
				</Modal>
            </div> 
		);
	}
}


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

let examples = {
	Standard: {
		jsx: <ExampleWrapper actionButtonText='Save' actionButtonClick={()=>{}}><ModalBody/></ExampleWrapper>,
		html: ''
	},
	Error: {
		jsx: <ExampleWrapper size='small' type='error'>{BODY_TEXT}</ExampleWrapper>,
		html: ''
	},
	Warning: {
		jsx: <ExampleWrapper size='small' type='alert'>{BODY_TEXT}</ExampleWrapper>,
		html: ''
	},
	Info: {
		jsx: <ExampleWrapper size='small' type='info'>{BODY_TEXT}</ExampleWrapper>,
		html: ''
	},
	Test: {
		jsx: <Example>
				<Modal show={() => isShown()} size='large'>
					<Modal.Header><Modal.Title>Title</Modal.Title></Modal.Header>
					<Modal.Body>
						<ModalBody/>
					</Modal.Body>
				</Modal>
			</Example>,
		exclude: 'Example'					 
	}
};

const Modals = () => (
    <Examples examples={examples}/>
);

export default Modals;