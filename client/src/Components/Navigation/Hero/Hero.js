import React, { Component } from "react";

import classes from "./Hero.module.css";

class Hero extends Component {

  goToHandler = () => {
    console.log("JHSFKKLAFKA")
    window.location = "/campuses";
  }


  render() {


    return (
      <div className={classes.Hero}>
        <div className={classes.Left}>
          <button className={classes.MoreBtn} >
            <div className={classes.Pointer}></div>
          </button>
        </div>
        <div className={classes.Right}>
          <h1>Search For Your Campus!</h1>
          <button className={classes.CallToBtn} onClick={this.goToHandler}>Search</button>
        </div>
      </div>
    );
  }
}

export default Hero;
