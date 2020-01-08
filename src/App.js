import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CarsComponent from './CarComponent';
import HomePage from './HomePage';
import { HashRouter, Switch, Route } from 'react-router-dom'


class App extends Component {

  render() {

    return (
      <HashRouter>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route exact path="/cars">
            <CarsComponent />
          </Route>
        </Switch>
      </HashRouter>
    );
  }

}


export default App;
