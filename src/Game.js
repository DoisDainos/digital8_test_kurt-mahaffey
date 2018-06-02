import React, { Component } from 'react';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';

/*
 * Contains buttons that interact with API.
 */
class Game extends Component {
  constructor() {
    super();
    this.state = {
      category: ""
    }
  }

  /*
   * Calls API function for random product.
   */
  setUpRequest() {
    var token = this.props.location.pathname.split("/")[2];
    APICalls.getRandomProduct(token, this.state.category);
  }

  componentDidMount() {
    var chosenCategory = this.props.location.pathname.split("/")[3];
    document.getElementById("game-heading").innerHTML = "Category: " +
    chosenCategory;
    this.setState({category: chosenCategory})
  }

  render() {
    return (
      <div>
        <h3 id="game-heading">Game page</h3>
        <Button variant="raised" color="primary"
        onClick={() => this.setUpRequest()}>
          Get a random product image
        </Button>
        <div id="frame"/>
      </div>
    );
  }
}

export default Game;
