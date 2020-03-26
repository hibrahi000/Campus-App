import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import './App.css';

class Contact extends Component {
    
    render() {
        return (
              <form className="contactpage">
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
        
    ReactDOM.render(<Contact/>, document.getElementById('root'));
    


export default Contact;