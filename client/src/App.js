import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'

import Forecast from './components/pages/Forecast/Forecast'
import Current from './components/pages/Current/Current'

import {
  Route
} from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Navbar bg="dark" variant="dark" fixed="top">
          <LinkContainer to="/current">
            <Navbar.Brand>
              {'Go With The Flow'}
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">

            <LinkContainer to="/current">
              <Nav.Link>Current</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/forecast">
            <Nav.Link>Forecast</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar>

      </div>

      <div className="App-routing">
        <Route path="/current" component={Current}/>
        <Route path="/forecast" component={Forecast}/>
      </div>
    </div>
  );
}

export default App;
