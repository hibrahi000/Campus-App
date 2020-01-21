import React, { Component } from "react";

export default class EditForm extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form action="/">
          {this.props.name} <br />
          <input type="text" placeholder="Lehman College" />
          <br />
          {this.props.address} {this.props.lastname} 
          <br />
          <input type="text" placeholder="850 bedford park east" />
          <br />
          {this.props.imageSrc} 
          <br />
          <input type="text" placeholder="" />
          <br />
          {this.props.description} 
          <br />
          <input type="text" placeholder="" />
          <br />
          <br />
          <input type="submit" value="Submit" />
        </form>
      </div>
    );
  }
}
