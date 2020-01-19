import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Link, Switch, BrowserRouter as Router} from 'react-router-dom';
import Home from './home';
import Campuses from './campuses';
import Students from './students';
import Contact from './contact';
import './index.css';

import * as serviceWorker from './serviceWorker';

const routing = (
    <Router>
        <div >
            <ul>
                <li>
                    <Link to="/home" id="#home">Home</Link>
                </li>
                <li>
                    <Link to="/campuses" id="#campuses">Campuses</Link>
                </li>
                <li>
                    <Link to="/students" id="#students">Students</Link>
                </li>
                <li>
                    <Link to="/contact" id="#contact">Contact</Link>
                </li>
            </ul>



            <Switch>
                <Route exact path="/home" component={Home}/>
                <Route path="/campuses" component={Campuses}/>
                <Route path="/students" component={Students}/>
                <Route path="/contact" component={Contact}/>
                {/* <Route component={NotFound}/> */}
            </Switch>
         
        </div>
    </Router>
        );


ReactDOM.render(routing, document.getElementById('root'));





//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
