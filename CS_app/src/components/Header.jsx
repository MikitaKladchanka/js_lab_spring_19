import React from 'react';
import h from './Header.module.css';

const Header = (props) => {
    return (
		<header className={h.main_header}>
		<div className={h.image_logo}>
			<h1>B-Clear</h1>
		</div>
		{props.children}
		</header>
    )
}

export default Header;