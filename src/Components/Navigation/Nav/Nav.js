import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "../HomePage/HomePage";
import Campuses from "../CampusPage/CampusPage";
import Students from "../../Students/StudentItem/StudentItem"
import Contact from "../Contact/Contact";
import NotFound from "../NotFound/404";

class Navigation extends Component {
  render() {
    return (
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Navbar.Brand href="/">Home</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto"></Nav>
            <Nav>
              <Nav.Link href="/campuses">Universities</Nav.Link>
              <Nav.Link href="/students">Students</Nav.Link>
              <Nav.Link href="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>

        <Switch>
          <Route exact path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route path="/campuses" component={Campuses} />
          <Route path="/students" component={Students} />
          <Route path="/contact" component={Contact} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    );
  }
}

export default Navigation;
