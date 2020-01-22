import React, { Component } from "react";
import classes from "./Form.module.css";

export default class EditStudentForm extends Component {
  render() {
    return (
      <div className={classes.Form}>
        <h1>{this.props.title}</h1>
        <form id="form" onSubmit={this.props.summit}>
          {/* // First Name */}
          {this.props.firstnameName} <br />
          <input
            type="text"
            placeholder="Norberto"
            name="firstname"
            value={this.props.firstname}
            required
            onChange={this.props.change}
          />
          <br />
          {/* // Last name */}
          {this.props.lastnameName} <br />
          <input
            type="text"
            placeholder="Fernandez"
            name="lastname"
            value={this.props.lastname}
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
            placeholder="Norbertostudios@gmail.com"
            name="email"
            value={this.props.email}
            required
            onChange={this.props.change}
          />
          <br />
          {/* // Get the gender dropdown */}
          {this.props.genderName}
          <br/>
          <select onChange={this.props.change}>
            <option>{this.props.gender}</option>
          </select>
          <br />
          {this.props.campusName}
          <br/>
          <select onChange={this.props.change}>
            <option>{this.props.campus}</option>
          </select>
          <br />
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
          <br />
          <input
            className={classes.Btn}
            type="submit"
            value="Submit"
            // onClick={this.props.summit}
          />
        </form>
      </div>
    );
  }
}
