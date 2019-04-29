import React from 'react';
import c from './Content.module.scss';

const Content = (props) => {
    return (
		<section id='Content' className={c.mainContent}>
			{props.children}
		</section>
    )
}

export default Content;