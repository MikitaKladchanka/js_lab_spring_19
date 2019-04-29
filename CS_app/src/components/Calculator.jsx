import React from 'react';
import c from './Calculator.module.scss';
import Input from './elements/Input';
import {InputGroup, FormControl, Form} from 'react-bootstrap';

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			small_room: '',
			big_room: '',
			toilets: '',
			standart: '',
			general: '',
			after_repair: '',
			carpets: '',
			office: '',
			furniture_coatings: '',
			industrial: '',
			pool: ''
		};
	}

	render(){
		return(
			<div className = {c.calcWrap}>
				<div className = {c.descriptionRoom}>
					<h3>Description of the room</h3>
					  <Input text = {[ "Small room (up to 20 m", <sup>2</sup>, ")" ]}/>
					  <Input text = {[ "Big room (up to 20 m", <sup>2</sup>, ")" ]}/>
					  <Input text = "Toilets" />
				</div>
				<div className = {c.serviceTypes}>
					<h3>Type of services</h3>
					 <Form>
						  {['checkbox'].map(type => (
						    <div key={`custom-${type}`} className="mb-3">
						      <Form.Check 
						        custom
						        type={type}
						        id={`custom-${type}`}
						        label={`Standart cleaning`}
						      />
						      <Form.Check 
						        custom
						        type={type}
						        id={`custom-${type}`}
						        label={`General cleaning`}
						      />
						      
						    </div>
						  ))}
						</Form>
						<Form.Check 
						        custom
						        type='checkbox'
						        id={`custom-checkbox`}
						        label={`Cleaning of carpets`}
						/>
				</div>
			</div>
		)
	}
}

export default Calculator;