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
      categories: [],
      chosen: ""
    };
  }

  componentWillMount() {
    var currentToken = this.props.location.pathname.split("/")[2];
    this.setState({token: currentToken});
    APICalls.getAllCategories(this, currentToken);
  }

  /*
   * Upon clicking radio button, set the component chosen category to be 
   * the clicked value.
   */
  handleRadioClick(value) {
    document.getElementById("continue").style.display = "inline-block";
    this.setState({chosen: value});
  }

  /*
   * Gets categories in state and displpays them as options.
   */
  getCategories() {
    var firstColumn = document.getElementById("col-1");
    var secondColumn = document.getElementById("col-2");
    // Clear columns:
    while (firstColumn.firstChild) {
      firstColumn.removeChild(firstColumn.firstChild);
    }
    while (secondColumn.firstChild) {
      secondColumn.removeChild(secondColumn.firstChild);
    }
    document.getElementById("continue").style.display = "none";
    // List each category name as a radio option:
    for (var i=0; i<this.state.categories.length; i++) {
      var radio = document.createElement("INPUT");
      var label = document.createElement("label");
      var element = document.createElement("LI");
      var catName = this.state.categories[i]["name"];
      var component = this;
      radio.className = "category-button";
      radio.id = i;
      radio.type = "radio";
      radio.name = "category";
      radio.value = catName;
      label.setAttribute("for", i);
      label.className = "category-label";
      radio.addEventListener("click", function() {
        component.handleRadioClick(this.value);
      });
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
        <div id="cat-continue-empty">
          <div className="buttons">
            <Link to={'/Game/' + this.state.token + '/' + this.state.chosen}
            style={{ textDecoration: 'none' }}>
              <Button id="continue" variant="raised" color="primary">
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
