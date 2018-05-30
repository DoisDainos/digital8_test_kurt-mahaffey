import React, { Component } from 'react';
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
   * Choose request type for API.
   * Parameters:
   *   - type: the type of request being made as a string value.
   */
  setUpRequest(type) {
    switch(type) {
      case "log in":
        APICalls.postLogin(this.state);
        break;
      case "random product":
        APICalls.getRandomProduct(this.state.token);
        break;
      case "one product":
        APICalls.getOneProduct(this.state.token);
        break;
      case "one bundle":
        APICalls.getOneBundle(this.state.token);
        break;
      case "all categories":
        APICalls.getAllCategories(this.state.token);
        break;
      case "one category":
        APICalls.getOneCategory(this.state.token);
        break;
      default:
        console.log("API call type not found.")
    }
  }

  render() {
    return (
      <div>
        <h3>Main page</h3>
        <Button variant="raised" color="primary"
        onClick={() => this.setUpRequest("log in", "")}>
          Log in
        </Button>
        <br />
        <Button className="mainButton" variant="raised" color="primary"
        onClick={() => this.setUpRequest("random product")}>
          Get random product
        </Button>
        <br />
        <div id="imageFrame"/>
      </div>
    );
  }
}

export default Main;
