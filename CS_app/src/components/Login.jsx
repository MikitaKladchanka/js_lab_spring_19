import React from 'react';
import {NavLink} from 'react-router-dom';
import l from './Login.module.css';

class Login extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			email: '',
			password: '' 
		};
		this.getValues = this.getValues.bind(this);
	}

	getValues(str, e){
		if (str === 'email') {this.setState({email: e.target.value})};
		if (str === 'pass') {this.setState({password: e.target.value})};
	}

	render(){
		// console.log(this.state);
		return(
			<div className={l.loginWrap}>
			<form>
				<input type="email" className={l.email}  onChange={(e) => this.getValues('email', e)} placeholder='email'/><br/>
				<input type="password" className={l.pass}  onChange={(e) => this.getValues('pass', e)} placeholder='password'/><br/>
				<input type="submit" value='GO' className={l.submit}/><br/>
				<NavLink to="/role">Registration</NavLink>
			</form>
		</div>
		)
	}
}

export default Login; 