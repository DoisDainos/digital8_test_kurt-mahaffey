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

  /*
   * Gets categories in state and displpays them as options.
   */
  getCategories() {
    console.log(this.state.categories);
    var firstColumn = document.getElementById("col-1");
    var secondColumn = document.getElementById("col-2");
    // Clear columns:
    while (firstColumn.firstChild) {
      firstColumn.removeChild(firstColumn.firstChild);
    }
    while (secondColumn.firstChild) {
      secondColumn.removeChild(secondColumn.firstChild);
    }
    // List each category name as a radio option:
    for (var i=0; i<this.state.categories.length; i++) {
      var radio = document.createElement("INPUT");
      var label = document.createElement("label");
      var element = document.createElement("LI");
      var catName = this.state.categories[i]["name"];
      radio.className = "category-button";
      radio.id = i;
      radio.setAttribute("type", "radio");
      radio.setAttribute("name", "category");
      radio.setAttribute("value", catName);
      label.setAttribute("for", i);
      label.className = "category-label";
      label.appendChild(document.createTextNode(catName))
      element.className = "category-list";
      element.appendChild(radio);
      element.appendChild(label);
      if (i%2 === 0) {
        firstColumn.appendChild(element);
      } else {
        secondColumn.appendChild(element);
      }
    }
    document.getElementById("cat-continue-empty").id = "category-continue";
  }

  render() {
    return (
      <div>
        <h3>Choose a category</h3>
        <div className="buttons">
          <Button variant="raised" color="primary"
          onClick={() => this.getCategories()}>
            Get categories
          </Button>
        </div>
        <br /><br />
        <div id="frame">
          <div id="col-1"/>
          <div id="col-2"/>
        </div>
        <br />
        <div id = "cat-continue-empty">
        <div className="buttons">
          <Link to={'/Game/' + this.state.token}
          style={{ textDecoration: 'none' }}>
            <Button variant="raised" color="primary">
              Continue
            </Button>
          </Link>
        </div>
        </div>
      </div>
    );
  }
}

export default Categories;
