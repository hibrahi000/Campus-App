import React, { Component } from "react";
import classes from "./Form.module.css";

export default class AddForm extends Component {
  render() {
    return (
      <div className={classes.Form} >
        
        <h1>{this.props.title}</h1>
        <form id="form" method='POST' action='/Campus/Add_Campus'>
          {this.props.name} <br />
          <input type="text" placeholder="Lehman College" name="name"  required onChange={this.props.nameChange} />
          <br />
          {this.props.address} {this.props.lastname} 
          <br />
          <input type="text" placeholder="250 Bedford Park Blvd W" name="address"  required onChange={this.props.addressChange} />
          <br />
          {this.props.imageSrc} 
          <br />
          <input type="url" placeholder="" name="imgSrc"  onChange={this.props.imageSrcChange} />
          <br />
          {this.props.description} 
          <br />
          <input type="text" placeholder="" name="description"  onChange={this.props.desChange}/>
          <br />
          <br />
          <input className={classes.Btn} type="submit" value="Submit"  onClick={this.props.summit}/>
        </form>
      </div>
    );
  }
}
