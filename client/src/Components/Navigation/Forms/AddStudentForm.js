import React, { Component } from 'react';
import classes from './Form.module.css';

// Help NOTES
// firstname: "Norberto",
//     lastname: "Fernandez",
//     dateofbirth: "01/20/2020",
//     email: "Norbertostudios@gmail.com",
//     gender: "Male", // Drop Down
//     campus: "Lehman College",// Drop Down
//     image: "https://norbertostudios.com/Images/p05.jpg",
//     id: "the id from database",
//     collegeArray: array of campuses

export default class AddForm extends Component {
	render() {
		return (
			<div className={classes.Form}>
				<h1>{this.props.title}</h1>
				<form id="form" onSubmit={this.props.submitFunction} action='/Student/Add_Student' method='POST'>
					{/* // First Name */}
					{this.props.firstnameName} <br />
					<input
						type="text"
						placeholder="John"
						name="firstname"
						required
						onChange={this.props.change}
					/>
					<br />
					{/* // Last name */}
					{this.props.lastnameName} <br />
					<input
						type="text"
						placeholder="Smith"
						name="lastname"
						required
						onChange={this.props.change}
					/>
					<br />
					{/* /// Date of Birth */}
					{/* {this.props.dobName} <br />
          <input
            type="date"
            placeholder="01/20/2020"
            name="dob"
            value={this.props.dob}
            // required
            onChange={this.props.change}
          /> */}
					<br />
					{/* // The email portion */}
					{this.props.emailName} <br />
					<input
						type="email"
						placeholder="TestEmail@email.com"
						name="email"
						required
						onChange={this.props.change}
					/>
					<br />
					{/* // Get the gender dropdown */}
					{this.props.genderName}
					<br />
					<select required name='gender' className={classes.selectBox}>
            <option value='NotSelected' >-------</option>
						<option value='Male' >Male</option>
						<option value='Female'>Female</option>
						<option value='N/A'>Undecided</option>
					</select>
					<br />
					{/* The College Selection Portion */}
					{this.props.campusName}
					<br />
					<select name='campus' className={classes.selectBox} required>
          <option value='NotSelected' >-------</option>
						{this.props.collegeArray.map((elem) => <option key={elem.id} value={elem.id}>{elem.university}</option>)}
					</select>
				 <br />
					{/*
        	{this.props.imageSrcName}
					<br />
					<input
						type="url"
						placeholder=""
						name="imgSrc"
						value={this.props.imageSrc}
						onChange={this.props.change}
					/>
          <br />
          */}
					<br />
					<input
						className={classes.Btn}
						type="submit"
            value="Submit"
					/>
				</form>
			</div>
		);
	}
}
