import React from 'react';
import {NavLink} from 'react-router-dom';
import c from './CustomerRegistration.module.css';

class CustomerRegistration extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			name: '',
			email: '',
			phone: '',
			password: '' 
		};
	}

	render(){
		return(
			<div className={c.customerRegWrap}>
				<form>
					<input 
					type="text"
					placeholder='Name'
					className={c.customerRegInput}
					/><br/>
					<input 
					type="email"
					placeholder='Email'
					className={c.customerRegInput}
					/><br/>
					<input 
					type="text"
					placeholder='Phone'
					className={c.customerRegInput}
					/><br/>
					<input 
					type="password"
					placeholder='Password'
					className={c.customerRegInput}
					/><br/>
					<input 
					type="password"
					placeholder='Confirm your password'
					className={c.customerRegInput}
					/><br/>
					<input 
					type="submit"
					submit=''
					value ='Register'
					/>
					<div>Social media icons</div>
				</form>
			</div>
		)
	}
}

export default CustomerRegistration; 