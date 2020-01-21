import React, { Component } from "react";

export default class AddForm extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form id="form">
          {this.props.name} <br />
          <input type="text" placeholder="Lehman College" name="name" onChange={this.props.nameChange} required/>
          <br />
          {this.props.address} {this.props.lastname} 
          <br />
          <input type="text" placeholder="850 bedford park east" name="add" required/>
          <br />
          {this.props.imageSrc} 
          <br />
          <input type="url" placeholder="" name="imgSrc" />
          <br />
          {this.props.description} 
          <br />
          <input type="text" placeholder="" name="description"/>
          <br />
          <br />
          <input type="submit" value="Submit"  onClick={this.props.summit}/>
        </form>
      </div>
    );
  }
}
