import React from "react";

import classes from "./Footer.module.css";

const footer = () => {
  return (
    <footer className={classes.Footer + " footer text-center" }>
      <div className="container">
        <p className="footer-text"> Campus Project | CopyRight 2020.</p>
      </div>
    </footer>
  );
};

export default footer;
