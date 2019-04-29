import React from 'react';
import nav from './Navigation.module.scss';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
		<nav className={nav.header_navigation}>
			<div>
				<button className={nav.btn}>
					<NavLink to="/profile" activeClassName={nav.active}>Profile</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/calculator" activeClassName={nav.active}>Calculator</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/services" activeClassName={nav.active}>Services</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/login" activeClassName={nav.active}>Login</NavLink>
				</button>
			</div>
		</nav>
    )
}

export default Navigation;
