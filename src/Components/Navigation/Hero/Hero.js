import React from "react";

import classes from './Hero.module.css'

const Hero = () => {
  return (
    <div className={classes.Hero}>
      <div className={classes.Left}>
          <button className={classes.MoreBtn}>
          <div className={classes.Pointer}></div></button>
      </div>
      <div className={classes.Right}>
          <h1>Search For Your Campus!</h1>
          <button className={classes.CallToBtn}>Search</button>
      </div>
    </div>
  );
};

export default Hero;
