import React, { Component } from "react";

export default class AddForm extends Component {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
        <form id="form">
          {this.props.name} <br />
          <input type="text" placeholder="Lehman College" required onChange={this.props.nameChange} />
          <br />
          {this.props.address} {this.props.lastname} 
          <br />
          <input type="text" placeholder="250 Bedford Park Blvd W" required onChange={this.props.addressChange} />
          <br />
          {this.props.imageSrc} 
          <br />
          <input type="url" placeholder="" name="imgSrc" onChange={this.props.imageSrcChange} />
          <br />
          {this.props.description} 
          <br />
          <input type="text" placeholder="" name="description" onChange={this.props.desChange}/>
          <br />
          <br />
          <input type="submit" value="Submit"  onClick={this.props.summit}/>
        </form>
      </div>
    );
  }
}
