import React, { Component } from "react";
import Aux from "../../../hoc/Aux";
import Hero from "../Hero/Hero";

import classes from "./HomePage.module.css";

class HomePage extends Component {

  render() {
    return (
      <Aux>
        <Hero />
        <div className={classes.HomePage}>
        </div>
      </Aux>
    );
  }
}

export default HomePage;
