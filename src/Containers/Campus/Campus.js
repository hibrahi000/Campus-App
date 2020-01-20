import React, { Component } from "react";

import Aux from "../../hoc/Aux";
// import classes from './Campus.module.css'
import Navigation from "../../Components/Navigation/Navigation";
import Hero from "../../Components/Navigation/Hero/Hero";
import Contents from "../../Components/Navigation/Contents/Contents";
import Footer from "../../Components/Navigation/Footer/Footer";


class Campus extends Component {
  render() {
    return (
      <Aux>
        <Navigation />
        <Hero />
        <Contents />
        <Footer />
      </Aux>
    );
  }
}

export default Campus;
