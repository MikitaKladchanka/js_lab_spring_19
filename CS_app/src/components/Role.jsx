import React from 'react';
import {NavLink} from 'react-router-dom';
import r from './Role.module.css';

class Role extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			customer: 'false',
			executor: 'false'
		};
		this.getRole = this.getRole.bind(this);
	}

getRole(str){
	if (str === 'customer') {
		this.setState({customer: true});
		this.setState({executor: false});
	};
	if (str === 'executor') {
		this.setState({customer: false});
		this.setState({executor: true});
	};

};

	render(){
		return(
			<div className={r.roleWrap}>
				<h2>CHOOSE YOUR DESTINY</h2>
				<button 
					className={r.customer} 
					onClick={(e) => this.getRole('customer')}>
					<NavLink to="/customer_registration_form">Customer</NavLink>
				</button><br/>
				<button 
					className={r.executor} 
					onClick={(e) =>this.getRole('executor')}>
					<NavLink to="/executor_registration_form">Executor</NavLink>
				</button>
			</div>
		);
	}
}

export default Role;