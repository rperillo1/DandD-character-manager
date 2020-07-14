import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import CharacterSheetPage from '../CharacterSheetPage/CharacterSheetPage'
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <>
            {/* <NavLink exact to='/logout'>LOGOUT</NavLink> */}
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/'>D&D Character-Manager</NavLink>
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/characters'>Character Sheets</NavLink>
          </>
          <>
            &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/signup'>SIGNUP</NavLink>
                &nbsp;&nbsp;&nbsp;
            <NavLink exact to='/login'>LOGIN</NavLink>
                &nbsp;&nbsp;&nbsp;
          </>
        </nav>
      </header>
      <main>
        <Switch>
          <Route exact path='/signup' render={({ history }) =>
            <SignupPage history={history} />
          } />
          <Route exact path='/login' render={({ history }) =>
            <LoginPage history={history} />
          } />
          <Route exact path='/' render={({ history }) =>
            <HomePage history={history} />
          } />
          <Route exact path='/characters' render={({ history }) =>
            <CharacterSheetPage history={history} />
          } />
        </Switch>
      </main>
    </div>
  );
}

export default App;
