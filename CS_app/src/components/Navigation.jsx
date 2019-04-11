import React from 'react';
import nav from './Navigation.module.css';
import {NavLink} from 'react-router-dom';

const Navigation = (props) => {
    return (
		<nav className={nav.header_navigation}>
			<div>
				<button className={nav.btn}>
					<NavLink to="/profile">Profile</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/calculator">Calculator</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/services">Services</NavLink>
				</button>
			</div>
			<div>
				<button className={nav.btn}>
					<NavLink to="/login">Login</NavLink>
				</button>
			</div>
		</nav>
    )
}

export default Navigation;