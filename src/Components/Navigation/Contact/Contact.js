import React, {Component} from 'react';

class Contact extends Component {
    
    render() {
        return (
              <form>
                <h1><strong>Contact Us:</strong></h1>
                <p>Enter your name:</p>
                <input type="text"/>

                <p>Information Inquiry:</p>
                <textarea placeholder="Enter submission"/>

                <input type="submit" />

              </form>
            );
          }
        }
    


export default Contact;