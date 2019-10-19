import React from 'react';
import './App.css';

import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import NavItem from 'react-bootstrap/NavItem'

import SeaLevel from './SeaLevel'
import ThermalExpansion from './ThermalExpansion'
import IceMelting from './IceMelting'

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { LinkContainer, Routes } from "react-router-bootstrap";

function App() {
  return (
    <div className="App">
      <div className="menu">
        <Navbar bg="dark" variant="dark">
          <LinkContainer to="/sea-level">
            <Navbar.Brand>
              {'Go With The Flow'}
            </Navbar.Brand>
          </LinkContainer>
          <Nav className="mr-auto">

            <LinkContainer to="/sea-level">
              <Nav.Link>Sea Level</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/thermal-expansion">
              <Nav.Link>Thermal Expansion</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/ice-melting">
            <Nav.Link>Ice Melting</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar>

      </div>

      <div className="App-routing">
        <Route path="/sea-level" component={SeaLevel}/>
        <Route path="/thermal-expansion" component={ThermalExpansion}/>
        <Route path="/ice-melting" component={IceMelting}/>
      </div>
    </div>
  );
}

export default App;
