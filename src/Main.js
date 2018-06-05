import React, { Component } from 'react';
import { Link } from 'react-router-dom';
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
        <h3>Welcome</h3>
        <p>This game will help us understand how you, the consumer, value
        certain products based on their look. <br />First, you will pick a
        category then guess the prices of products from that category. <br />
        If on https, please allow loading of unsafe scripts for API use.</p>
        <div className="buttons">
          <Link to={'/Categories/' + this.state.token}
          style={{ textDecoration: 'none' }}>
            <Button variant="raised" color="primary">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Main;
