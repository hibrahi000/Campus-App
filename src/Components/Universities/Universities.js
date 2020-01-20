import React, { Component } from "react";

import classes from "./Universities.module.css";
import University from "./University/University";
import AddForm from "../Navigation/Forms/AddForm";
import Aux from "../../hoc/Aux";

class Universities extends Component {
  state = {
    universities: [{ title: "Lehman College", studentsCount: "5", image: "" }]
  };

  render() {
    let showContent = null;

    if (this.props.addForm) {
      showContent = (
        <AddForm
          title="New Campus Form"
          name="Campus Name:"
          address="Address:"
          imageSrc="Image Source:"
        />
      );
    } else {
        if(this.state.universities.length === 0)
        {
            showContent=
            <div className={classes.BG}>
            <h1>All Campuses</h1>
            <button onClick={this.props.clicked}>Add Campus</button>
            <p>sdjhfkshlkdglksjdlfjlskjdlfjsljdgljsdlkgjlsdj</p>
          </div>
        }else{
      showContent = (
        <Aux>
          <div className={classes.BG}>
            <h1>All Campuses</h1>
            <button onClick={this.props.clicked}>Add Campus</button>
          </div>

          <div className={classes.Box}>
            <University title={this.state.universities[0].title} 
                        studentsCount={this.state.universities[0].studentsCount} 
                        image={this.state.universities[0].image} />
            <University title={this.state.universities[0].title} 
                        studentsCount={this.state.universities[0].studentsCount} 
                        image={this.state.universities[0].image} />
            <University title={this.state.universities[0].title} 
                        studentsCount={this.state.universities[0].studentsCount} 
                        image={this.state.universities[0].image} />
          </div>
        </Aux>
      );}
    }

    return <div className={classes.Universities}>{showContent}</div>;
  }
}

export default Universities;
