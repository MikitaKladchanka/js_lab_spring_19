import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Navigation from './components/Navigation';
import Content from './components/Content';
import Login from './components/Login';
import Services from './components/Services';
import Calculator from './components/Calculator';
import Profile from './components/Profile';
import Role from './components/Role';


class App extends Component {
    render() {
        return (
          <BrowserRouter>
            <div className="App">
              <Header>
                <Navigation />
              </Header>
              <Content>
                <Route component={Profile} path='/profile'></Route>
                <Route component={Calculator} path='/calculator'></Route>
                <Route component={Services} path='/services'></Route>
                <Route component={Login} path='/login'></Route>
                <Route component={Role} path='/role'></Route>
              </Content>
            </div>
          </BrowserRouter>
        );
    }
}

export default App;