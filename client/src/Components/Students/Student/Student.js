import React, { Component } from "react";
import classes from "./Student.module.css";

class Student extends Component {
  render() {
    return (
      <div className={classes.Student}  id={this.props.ID}>
        <h3 className={classes.Title} onClick ={this.props.campusPageClick}>{this.props.title}</h3>
          <img className={classes.ImagePlace} src={this.props.image} onClick ={this.props.campusPageClick} alt="" />
        <p>Campus: {this.props.campusName}</p>
        {/* <p>Campus: {this.props.campusName}</p> */}

        <button className={classes.Edit} onClick={this.props.edit}>Edit</button>
        <button className={classes.Delete} onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}
export default Student;
