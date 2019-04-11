import React from 'react';
import c from './Content.module.css';

const Content = (props) => {
    return (
		<section id='Content' className={c.mainContent}>
			{props.children}
		</section>
    )
}

export default Content;