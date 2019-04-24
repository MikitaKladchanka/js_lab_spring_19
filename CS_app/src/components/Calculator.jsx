import React from 'react';
import c from './Calculator.module.css';

class Calculator extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			small_room: '',
			big_room: '',
			toilets: '',
			standart: '',
			general: '',
			after_repair: '',
			carpets: '',
			office: '',
			furniture_coatings: '',
			industrial: '',
			pool: ''
		};
	}

	render(){
		return(
			<div className = {c.calcWrap}>
				<div className = {c.descriptionRoom}>
					<h3>Description of the room</h3>
					<span>Small room (up to 20 m<sup>2</sup>)</span>
					<input type="number" className = {c.calcNum, c.small_room_num} min = '0'/><br/>
					<span>Big room (more than 20 m<sup>2</sup>)</span>
					<input type="number" className = {c.calcNum, c.big_room_num} min = '0'/><br/>
					<span>Toilets</span>
					<input type="number" className = {c.calcNum, c.toilets_num} min = '0'/><br/>
				</div>
				<div className = {c.serviceTypes}>
					<h3>Type of services</h3>
				</div>
			</div>
		)
	}
}

export default Calculator;