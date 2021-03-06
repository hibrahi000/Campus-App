import React, { Component } from "react";
import classes from "./University.module.css";

class University extends Component {
  render() {
    return (
      <div className={classes.University}  id={this.props.ID}>
        <h3 className={classes.Title} onClick ={this.props.campusPageClick}>{this.props.title}</h3>
         {/* className={classes.ImagePlace} onClick ={this.props.campusPageClick}> */}
          <img className={classes.ImagePlace} src={this.props.image} onClick ={this.props.campusPageClick} alt="" />
       
        <p>Amount of students: {this.props.studentsCount}</p>

        <button className={classes.Edit} onClick={this.props.edit}>Edit</button>
        <button className={classes.Delete} onClick={this.props.delete}>Delete</button>
      </div>
    );
  }
}
export default University;
