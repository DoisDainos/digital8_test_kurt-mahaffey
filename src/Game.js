import React, { Component } from 'react';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';

/*
 * Contains buttons that interact with API.
 */
class Game extends Component {
  constructor() {
    super();
    this.state = {token: ""};
  }

  /*
   * Calls API function for random product.
   */
  setUpRequest() {
    var token = this.props.location.pathname.split("/")[2];
    APICalls.getRandomProduct(token);
  }

  render() {
    return (
      <div>
        <h3>Game page</h3>
        <Button variant="raised" color="primary"
        onClick={() => this.setUpRequest()}>
          Get a random product image
        </Button>
        <div id="imageFrame"/>
      </div>
    );
  }
}

export default Game;
