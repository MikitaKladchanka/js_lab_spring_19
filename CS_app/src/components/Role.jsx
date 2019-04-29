import React from 'react';
import {NavLink} from 'react-router-dom';
import r from './Role.module.scss';

class Role extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			customer: 'false',
			service: 'false'
		};
		this.getRole = this.getRole.bind(this);
	}

getRole(str){
	if (str === 'customer') {
		this.setState({customer: true});
		this.setState({service: false});
	};
	if (str === 'service') {
		this.setState({customer: false});
		this.setState({service: true});
	};

};

	render(){
		return(
			<div className={r.roleWrap}>
				<h2>Choose role</h2>
				<button 
					className={r.customer} 
					onClick={(e) => this.getRole('customer')}>
					<NavLink to="/customer_registration_form">Customer</NavLink>
				</button><br/>
				<button 
					className={r.service} 
					onClick={(e) =>this.getRole('service')}>
					<NavLink to="/service_registration_form">Service</NavLink>
				</button>
			</div>
		);
	}
}

export default Role;