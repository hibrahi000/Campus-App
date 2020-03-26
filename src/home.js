import './App.css';
import React, {Component} from 'react';
import ReactDOM from 'react-dom';


class Home extends Component {
    render() {
        return (
        <div id="aboutcollege">
          <h1 id="heading main">
              <strong>College For Leadership Mission:</strong>
          </h1>
          <p id="mainparagraph">
            College For Leadership University is one of the world's most 
            important centers of research and at the same 
            time a distinctive and distinguished learning 
            environment for undergraduates and graduate students 
            in many scholarly and professional fields. 
            The University recognizes the importance of its 
            location in New York City and seeks to link its 
            research and teaching to the vast resources of a 
            great metropolis. It seeks to attract a diverse and 
            international faculty and student body, to support 
            research and teaching on global issues, and to create 
            academic relationships with many countries and regions. 
            It expects all areas of the University to advance knowledge 
            and learning at the highest level and to convey the products
             of its efforts to the world.
          </p>
          <a href="#search" class="btn">Search</a>

      <footer id="main-footer" class="footermain">
      
            <p>Copyrihht &copy; 2020, College For Leadership, All Rights
            Reserved</p>
      </footer>
      </div>
        )
      
    }
}


export default Home;