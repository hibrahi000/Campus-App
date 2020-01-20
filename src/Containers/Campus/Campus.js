import React, { Component } from "react";

import Aux from "../../hoc/Aux";
// import classes from './Campus.module.css'
import Nav from "../../Components/Navigation/Nav/Nav";
import HomePage from "../../Components/Navigation/HomePage/HomePage";
import Footer from "../../Components/Navigation/Footer/Footer";


class Campus extends Component {
  render() {
    return (
      <Aux>
        <Nav />
        {/* //Navigation needs to change  */}
        <HomePage/>
        <Footer />
      </Aux>
    );
  }
}

export default Campus;
