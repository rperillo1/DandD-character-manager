import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterSheetIndexPage from '../CharacterSheetIndexPage/CharacterSheetIndexPage'
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import SpellsPage from '../SpellsPage/SpellsPage'
import AddCharacterSheetPage from '../AddCharacterSheetPage/AddCharacterSheetPage'
import CharacterSheetShowPage from '../CharacterSheetShowPage/CharacterSheetShowPage'
import userService from '../../utils/userService';
import * as characterService from '../../utils/characterService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
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

  handleAddCharacter = async newCharacterData => {
    await characterService.createCharacterAPI(newCharacterData)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            {userService.getUser() ?
              <>
                <Navbar bg="dark" variant="dark" sticky="top">
                  <Navbar.Brand href="/"><span className="material-icons">gavel</span>D&D Char-Manager</Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="/characters">Character Sheets</Nav.Link>
                  </Nav>
                  <Nav className="ml-auto">
                    <Nav.Link href="/logout" onClick={this.handleLogout}>Log Out</Nav.Link>
                  </Nav>
                  {/* <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                    <Button variant="outline-info">Search</Button>
                  </Form> */}
                </Navbar>
              </>
              :
              <>
                <Navbar bg="dark" variant="dark" sticky="top">
                  <Navbar.Brand href="/"><span class="material-icons">gavel</span>D&D Char-Manager</Navbar.Brand>
                  <Nav className="ml-auto">
                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                    <Nav.Link href="/login">Log In</Nav.Link>
                  </Nav>
                </Navbar>
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
              <HomePage history={history} handleLogout={this.handleLogout} />
            } />
            <Route exact path='/characters' render={({ history }) =>
              <CharacterSheetIndexPage history={history} />
            } />
            <Route exact path='/characters/:id' render={({ history }) =>
              <CharacterSheetShowPage history={history} />
            } />
            <Route exact path='/:id/spells' render={({ history }) =>
              <SpellsPage history={history} />
            } />
            <Route exact path='/add-character' render={({ history }) =>
              <AddCharacterSheetPage history={history} handleAddCharacter={this.handleAddCharacter} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
