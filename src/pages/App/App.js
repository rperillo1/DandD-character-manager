import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import CharacterSheetIndexPage from '../CharacterSheetIndexPage/CharacterSheetIndexPage'
import HomePage from '../HomePage/HomePage'
import SignupPage from '../SignupPage/SignupPage'
import LoginPage from '../LoginPage/LoginPage'
import SpellsPage from '../SpellsPage/SpellsPage'
import AddCharacterSheetPage from '../AddCharacterSheetPage/AddCharacterSheetPage'
import EditCharacterSheetPage from '../EditCharacterSheetPage/EditCharacterSheetPage'
import CharacterSheetShowPage from '../CharacterSheetShowPage/CharacterSheetShowPage'
import userService from '../../utils/userService';
import * as characterService from '../../utils/characterService';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Nav, Navbar } from 'react-bootstrap';
import './App.css';

class App extends Component {
  state = {
    user: userService.getUser(),
    characters: [],
    // character: {}
  }

  handleSignupOrLogin = () => {
    this.setState({ user: userService.getUser() });
  }

  handleLogout = () => {
    userService.logout();
    this.setState({ user: null }, () => this.props.history.push('/'));
  };

  handleAddCharacter = async newCharacterData => {
    await characterService.createCharacterAPI(newCharacterData)
  }

  handleDeleteCharacter = async idOfCharacterToDelete => {
    await characterService.deleteCharacterAPI(idOfCharacterToDelete);
    this.setState(state => ({
      characters: state.characters.filter(char => char._id !== idOfCharacterToDelete)
    }), () => this.props.history.push('/characters'));
  }

  handleAddSpellToCharacter = async (spellFromAPI, idOfCharacter) => {
    await characterService.addSpellToCharacter(spellFromAPI, idOfCharacter)
  }

  handleEditCharacter = async (characterToUpdate, characterId) => {
    await characterService.updateCharacterAPI(characterToUpdate, characterId);
  }

  handleDeleteSpell = async (characterId, spellId) => {
    await characterService.deleteSpellAPI(characterId, spellId)
    // this.props.history.push('/characters')
  }

  getAllCharacters = async () => {
    const characters = await characterService.getAllCharactersAPI();
    this.setState({
      characters
    })
  }

  async componentDidMount() {
    this.getAllCharacters();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            {userService.getUser() ?
              <>
                <Navbar bg="dark" variant="dark" sticky="top">
                  <Navbar.Brand href="/"><span className="material-icons">gavel</span><span>The Hammer</span></Navbar.Brand>
                  <Nav className="mr-auto">
                    <Nav.Link href="/characters">Character Sheets</Nav.Link>
                  </Nav>
                  <Nav className="ml-auto">
                    <Nav.Link onClick={this.handleLogout}>Log Out</Nav.Link>
                  </Nav>
                </Navbar>
              </>
              :
              <>
                <Navbar bg="dark" variant="dark" sticky="top">
                  <Navbar.Brand href="/"><span class="material-icons">gavel</span>The Hammer</Navbar.Brand>
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
            <Route exact path='/characters/:id' render={({ location }) =>
              <CharacterSheetShowPage location={location} handleDeleteCharacter={this.handleDeleteCharacter} />
            } />
            <Route exact path='/characters/:id/spells' render={({ location, history }) =>
              <SpellsPage location={location} history={history} 
              handleAddSpellToCharacter={this.handleAddSpellToCharacter} 
              handleDeleteSpell={this.handleDeleteSpell} 
              getAllCharacters={this.getAllCharacters}
              />
            } />
            <Route exact path='/add-character' render={({ history }) =>
              <AddCharacterSheetPage history={history} handleAddCharacter={this.handleAddCharacter} />
            } />
            <Route exact path='/characters/:id/edit' render={({ location, history }) =>
              <EditCharacterSheetPage location={location} history={history} handleEditCharacter={this.handleEditCharacter} />
            } />
          </Switch>
        </main>
      </div>
    );
  }
}

export default App;
