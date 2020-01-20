import React from "react";

import classes from "./Universities.module.css";
import University from "./University/University";

const universities = props => {
  return (
    <div className={classes.Universities}>
        <div className={classes.BG}> 
        <h1>All Campuses</h1>
      <button onClick={props.clicked}>Add Campus</button>
      </div>
     
      <div className={classes.Box}>
        <University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        />
        <University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        />
        <University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        />
        <University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        /><University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        />
        <University 
        title           ="Lehman College" 
        studentsCount   ="5" 
        image           ="" 
        />
      </div>
    </div>
  );
};

export default universities;
