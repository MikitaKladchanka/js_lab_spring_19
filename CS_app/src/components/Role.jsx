import React from 'react';
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
				<button className={r.customer} onClick={(e) => this.getRole('customer')}>Customer</button><br/>
				<button className={r.executor} onClick={(e) =>this.getRole('executor')}>Executor</button>
			</div>
		);
	}
}

export default Role;