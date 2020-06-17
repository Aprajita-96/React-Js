
import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  //  npm install react-router-dom

import TwoWayBinding from "../two-way-binding/two-way-binding";
import Lifecycle from "../lifecycle/lifecycle";
import Home from '../home/home' ;
import BtnHook from '../btn-hook/btn-book';


export default function MyRouter() {
    return (
      <Router>
        <nav className="navbar navbar-expand-sm bg-light">
          <ul  className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link" to="/two-way">2-Way-Bind</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link"  to="/lifecycle">Lifecycle</Link>
            </li>
            <li className="nav-item">
              <Link  className="nav-link"  to="/btnhook">Button-hook</Link>
            </li>
          </ul>
        <br/> <br/>
        </nav>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/two-way">
              <TwoWayBinding />
            </Route>
            <Route path="/lifecycle">
              <Lifecycle name='react' />
            </Route>
            <Route path="/btnhook">
              <BtnHook />
            </Route>
          </Switch>
      </Router>
    );
  }
  

