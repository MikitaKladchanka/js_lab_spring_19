import React from 'react';
import {NavLink} from 'react-router-dom';
import MultipleSelectCheckbox from './elements/MultipleSelectCheckbox';
import s from './ServiceRegistration.module.scss';

class ServiceRegistration extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			phone: '',
			password: '',
			description: '' 
		};
	}

	render(){
		return(
			<div className={s.serviceRegWrap}>
				<form>
					<div className={s.logo}><p>Logo</p></div><input type="file" className={`${s.elements}`}/><br/>
					<input 
						type="text" 
						placeholder='Company name'
						className={`${s.inputs} ${s.elements}`}/><br/>
					<textarea 
						name="description" 
						id="companyDescription" 
						cols="30" rows="10" 
						placeholder='Describe your company'
						className={s.elements}>
					</textarea><br/>
					<input 
						type="text" 
						placeholder='Adress'
						className={`${s.inputs} ${s.elements}`}/><br/>
					<MultipleSelectCheckbox />
					<p>PRICE (решу как сделать после рассчетов)</p>
					<input 
					type="password" 
					placeholder='Password'
					className={`${s.inputs} ${s.elements}`}/><br/>
					<input 
					type="Password" 
					placeholder='Confirm Password'
					className={`${s.inputs} ${s.elements}`}/><br/>
					<input 
					type="submit" 
					value='Register'
					className={`${s.subBtn} ${s.elements}`}/>
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
export default ServiceRegistration; 