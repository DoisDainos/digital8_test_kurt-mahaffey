import React, { Component } from 'react';
import { Link, BrowserRouter } from 'react-router-dom';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';

/*
 * Contains buttons that interact with API.
 */
class Main extends Component {
  constructor() {
    super();
    this.state = {token: ""};
  }

  /*
   * Calls API function for login
   * Parameters:
   *   - type: the type of request being made as a string value.
   */
  setUpRequest() {
    APICalls.postLogin(this);
  }

  componentWillMount() {
    this.setUpRequest();
  }

  render() {
    return (
      <div>
        <h3>Main page</h3>
        <Link to={'/Categories/' + this.state.token} style={{ textDecoration: 'none' }}>
          <Button variant="raised" color="primary">
            Navigate
          </Button>
        </Link>
        <div id="imageFrame"/>
      </div>
    );
  }
}

export default Main;
