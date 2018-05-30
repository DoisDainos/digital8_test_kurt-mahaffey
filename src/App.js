import React, { Component } from 'react';
import {Route, HashRouter} from 'react-router-dom';
import './App.css';
import Main from './Main';

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Digital8 test</h1>
          </header>
          <div className="App-content">
            <Route exact path="/" component={Main}/>
          </div>
        </div>
      </HashRouter>
    );
  }
}

export default App;
