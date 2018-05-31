import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';

/*
 * Contains buttons that interact with API.
 */
class Categories extends Component {
  constructor() {
    super();
    this.state = {
      token: "",
      categories: {}
    };
  }

  /*
   * Calls API function for random product.
   */
  setUpRequest() {
    APICalls.getRandomProduct(this.state.token);
  }

  componentWillMount() {
    var currentToken = this.props.location.pathname.split("/")[2];
    this.setState({token: currentToken});
    APICalls.getAllCategories(this, currentToken);
  }

  getCategories() {
    console.log(this.state.categories);
    for (var i=0; i<this.state.categories.length; i++) {
      var button = document.createElement("Button");
      button.innerHTML = this.state.categories[i]["name"];
      document.getElementById("imageFrame").appendChild(button);
    }
  }

  render() {
    return (
      <div>
        <h3>Choose a category</h3>
        <Button variant="raised" color="primary"
        onClick={() => this.getCategories()}>
          Get categories
        </Button>
        <br /><br />
        <Link to={'/Game/' + this.state.token} style={{ textDecoration: 'none' }}>
          <Button variant="raised" color="primary">
            Navigate
          </Button>
        </Link>
        <div id="imageFrame"/>
      </div>
    );
  }
}

export default Categories;
