import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'

import Home from './containers/Home'
import About from './containers/About'
import Dashboard from './containers/Dashboard'
import Profile from './containers/Profile'
import PrivateRoute from './components/PrivateRoute'

import logo from './logo.svg';
import './App.css';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile">Profile</Link>
              </li>
            </ul>
          </header>
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/about' component={About} />
            <PrivateRoute path='/dashboard' component={Dashboard} />
            <PrivateRoute path='/profile' component={Profile} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
