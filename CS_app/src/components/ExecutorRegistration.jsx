import React from 'react';
import {NavLink} from 'react-router-dom';
import MultipleSelectCheckbox from './elements/MultipleSelectCheckbox';
import c from './ExecutorRegistration.module.css';

class ExecutorRegistration extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			phone: '',
			password: '' 
		};
	}

	render(){
		return(
			<div className='customerRegWrap'>
				<form>
					<span>Download logo</span><input type="file"/><br/>
					<input 
						type="text" 
						placeholder='Company name'/><br/>
					<textarea 
						name="description" 
						id="companyDescription" 
						cols="30" rows="10" 
						placeholder='Describe your company'>
					</textarea><br/>
					<input 
						type="text" 
						placeholder='Adress'/><br/>
					<MultipleSelectCheckbox />
					<p>PRICE (решу как сделать после рассчетов)</p>
					<input type="password" placeholder='Password'/><br/>
					<input type="Password" placeholder='Confirm Password'/><br/>
					<input type="submit" value='Register'/>
				</form>
			</div>
		)
	}
}
					// <select name="serviceTypes" id="serviceType" multiple>
					// 	<option disabled>Select required types</option>
					// 	<option value="Standard room cleaning">Standard room cleaning</option>
					// 	<option value="General cleaning">General cleaning</option>
					// 	<option value="Cleaning after repair and construction">Cleaning after repair and construction</option>
					// 	<option value="Dry cleaning of carpets">Dry cleaning of carpets</option>
					// 	<option value="Cleaning of offices">Cleaning of offices</option>
					// 	<option value="Dry cleaning of furniture and coatings">Dry cleaning of furniture and coatings</option>
					// 	<option value="Industrial cleaning">Industrial cleaning</option>
					// 	<option value="Cleaning the pool">Cleaning the pool</option>
					// </select><br/>
export default ExecutorRegistration; 