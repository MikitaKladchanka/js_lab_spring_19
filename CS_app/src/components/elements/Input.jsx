import React from 'react';
import {InputGroup, FormControl} from 'react-bootstrap';

class Input extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			text: this.props.text
		}
	}

	render(){
		return(
			<InputGroup className="mb-3">
				<InputGroup.Prepend>
					<InputGroup.Text id="inputGroup-sizing-default">{this.props.text}</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					aria-label="Default"
					aria-describedby="inputGroup-sizing-default"
					type="number"
					min="0"
				/>
			</InputGroup>
		)
	}
}

export default Input;