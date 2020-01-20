import React, { Component } from "react";
import classes from "./University.module.css";

class University extends Component {
  render() {
    return (
      <div className={classes.University}>
        <h3 className={classes.Title}>{this.props.title}</h3>
        <div className={classes.ImagePlace}>
          <img src={this.props.image} alt="" />
        </div>
        <p>Amount of students: {this.props.studentsCount}</p>

        <button className={classes.Edit}>Edit</button>
        <button className={classes.Delete}>Delete</button>
      </div>
    );
  }
}
export default University;
