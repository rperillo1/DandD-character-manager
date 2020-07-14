import React, { Component } from 'react';
import { Route, Switch, NavLink, Redirect } from 'react-router-dom';
import CharacterSheetPage from '../CharacterSheetPage/CharacterSheetPage'
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import SpellsPage from '../SpellsPage/SpellsPage'
import userService from '../../utils/userService';
import './App.css';

class App extends Component {
  state = {
    user: userService.getUser(),
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null });
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <NavLink exact to='/'>D&D Character-Manager</NavLink>
            {userService.getUser() ?
              <>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/characters'>Character Sheets</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/logout' onClick={this.handleLogout}>LOGOUT</NavLink>
              </>
              :
              <>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/signup'>SIGNUP</NavLink>
                &nbsp;&nbsp;&nbsp;
                <NavLink exact to='/login'>LOGIN</NavLink>
                &nbsp;&nbsp;&nbsp;
          </>
            }
          </nav>
        </header>
        <main>
          <Switch>
            <Route exact path='/signup' render={({ history }) =>
              <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
              />
            } />
            <Route exact path='/login' render={({ history }) =>
              <LoginPage
                handleSignupOrLogin={this.handleSignupOrLogin}
                history={history}
              />
            } />
            <Route exact path='/' render={({ history }) =>
              <HomePage history={history} />
            } />
            <Route exact path='/characters' render={({ history }) =>
              <CharacterSheetPage history={history} />
            } />
            <Route exact path='/spells' render={({ history }) =>
              <SpellsPage history={history} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
