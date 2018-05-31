import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import Main from './Main';
import Game from './Game';
import Categories from './Categories';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import AppBar from '@material-ui/core/AppBar';

const theme = createMuiTheme({
  palette: {
    primary: green,
    alternateTextColor: 'white',
  },
  overrides: {
    MuiButton: {
      raisedPrimary: {
        color: 'white',
      },
    },
  }
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <div className="App">
          <AppBar position="static" style={{ color: 'white' }}>
            <h1 className="App-title">Digital8 test</h1>
          </AppBar>
          <div className="App-content">
            <Route exact path="/" component={Main}/>
            <Route path="/Game" component={Game}/>
            <Route path="/Categories" component={Categories}/>
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
