import React, {Component} from 'react';
import classes from "./Contact.module.css"

class Contact extends Component {
    
    render() {
        return (
          <div className={classes.Contact}>
              <form className={classes.Conent}>
              
                <h1><strong>Contact Us:</strong></h1>
                <p>Enter your name:</p>
                <input type="text"/>

                <p>Information Inquiry:</p>
                <textarea placeholder="Enter submission"/>

              
                <br/>
                <input className={classes.Btn} type="submit" />
                <br/>
                <br/>
              </form>
              </div>
            );
          }
        }
    


export default Contact;