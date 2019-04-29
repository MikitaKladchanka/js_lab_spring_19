import React from 'react';
import {NavLink} from 'react-router-dom';
import l from './Login.module.scss';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			phone: '',
			password: '' 
		};
		this.validate = this.validate.bind(this);
	}
	validate(e ,str){
		let value = e.target.value;
		let regEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    	let regPhone = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;

    	let resultEmail = regEmail.test(String(value).toLowerCase());
    	let resultPhone = regPhone.test(String(value).toLowerCase());

    	if (resultEmail === true) {this.setState({email: value})};
    	if (resultPhone === true) {this.setState({phone: value})};
    	if (str === 'pass') {this.setState({password: value})};
	}

	render(){
		return(
			<div className={l.loginWrap}>
			<form>
				<input 
					type="text" 
					className={l.email}  
					onChange={(e) => this.validate(e)} 
					placeholder='E-mail or Phone' required='required'/><br/>
				<input 
					type="password" className={l.pass}  
					onChange={(e) => this.validate(e, 'pass')} 
					placeholder='Password' required='required'/><br/>
				<input 
					type="submit" 
					value='GO' 
					className={l.submit}/><br/>
				<NavLink to="/role">Registration</NavLink>
			</form>
		</div>
		)
	}
}

export default Login; 