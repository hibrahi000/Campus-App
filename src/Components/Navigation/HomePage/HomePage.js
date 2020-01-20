import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Hero from "../Hero/Hero";
import Universities from "../../Universities/Universities";

import classes from "./HomePage.module.css";

class HomePage extends Component {

  state ={
    addingForm: false
  }

  addCampus = e =>{
    // to the form to add campus
    console.log(e.target);
    this.setState({addingForm: true})
  }

  render() {
    let {addingForm} = this.state; 
    return (
      <Aux>
        <Hero />
        <div className={classes.HomePage}>
          <Universities clicked={this.addCampus}
          addForm = {addingForm}></Universities>
        </div>
      </Aux>
    );
  }
}

export default HomePage;
