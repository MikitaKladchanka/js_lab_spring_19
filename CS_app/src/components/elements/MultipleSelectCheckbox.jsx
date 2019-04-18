import React from 'react';
import m from './MultipleSelectCheckbox.module.css';

class MultipleSelectCheckbox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			standart: 'false',
			general: 'false',
			after_reapair: 'false',
			carpets: 'false',
			offices: 'false',
			furniture_coatings: 'false',
			industrial: 'false',
			pools: 'false'
		};
		this.showCheckboxes = this.showCheckboxes.bind(this);
	}

	showCheckboxes() {
	  // let expanded = false;
	  // let checkboxes = document.getElementById("checkboxes");
	  // if (!expanded) {
	  //   checkboxes.style.display = "block";
	  //   expanded = true;
	  // } else {
	  //   checkboxes.style.display = "none";
	  //   expanded = false;
	  // }
	 	alert('селект должен раскрываться');
	}
	
	render(){
		return(
			<div className={m.multiselect}>
				<div className={m.selectBox} onClick = {this.showCheckboxes}>
					<select>
						<option>Select an option</option>
					</select>
				<div className={m.overSelect}></div>
				</div>
				<div id={m.checkboxes}>
					<label for={m.one}>
					<input type="checkbox" id={m.one}/>First</label>
					<label for={m.two}>
					<input type="checkbox" id={m.two}/>Second</label>
					<label for={m.three}>
					<input type="checkbox" id={m.three}/>Third</label>
				</div>
			</div>
		)
	}
}

export default MultipleSelectCheckbox;