import React, { createContext, useReducer } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Navber from './components/Navber';
import Register from './components/Register';
import Signin from './components/Signin';
import Errorpage from './components/Errorpage';
import Project from './components/Project';
import Logout from './components/Logout';

import { reducer, initialState } from '../src/reducer/reducer'

export const userContext = createContext();


function App() {

  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <BrowserRouter>

        <userContext.Provider value={{ state, dispatch }}>
          <Navber />

          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>

            <Route exact path='/Project'>
              <Project />
            </Route>

            <Route exact path='/About'>
              <About />
            </Route>

            <Route exact path='/Contact'>
              <Contact />
            </Route>

            <Route exact path='/Register'>
              <Register />
            </Route>

            <Route exact path='/Signin'>
              <Signin />
            </Route>

            <Route exact path='/Logout'>
              <Logout />
            </Route>

            <Route >
              <Errorpage />
            </Route>
          </Switch>

        </userContext.Provider>

      </BrowserRouter>
    </>
  );
}

export default App;
