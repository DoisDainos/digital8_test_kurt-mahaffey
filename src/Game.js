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
      category: "",
      products: [],
      rounds: 3
    }
  }

  /*
   * Takes the image field of a product and adds it to the document frame.
   */
  addProductImageToFrame(product) {
    var image = document.createElement("IMG");
    var imageDiv = document.getElementById("frame");
    while (imageDiv.firstChild) {
      imageDiv.removeChild(imageDiv.firstChild);
    }
    image.setAttribute("src", product["image"]);
    imageDiv.appendChild(image);
  }

  /*
   * Shuffle the array items of the component products array.
   */
  shuffleProductsArray() {
    var tempArray = this.state.products;
    var currentIndex = tempArray.length;
    while (0 !== currentIndex) {
      var randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      var tempVal = tempArray[currentIndex];
      tempArray[currentIndex] = tempArray[randomIndex];
      tempArray[randomIndex] = tempVal;
    }
    this.setState({products: tempArray});
  }

    /*
     * Calls API function for random product.
     */
    setUpRequest() {
      this.shuffleProductsArray();
      this.addProductImageToFrame(this.state.products[0]);
      console.log(this.state.products);
    }

  componentDidMount() {
    var chosenCategory = this.props.location.pathname.split("/")[3];
    document.getElementById("game-heading").innerHTML = "Category: " +
    chosenCategory;
    this.setState({category: chosenCategory});var token = this.props.location.pathname.split("/")[2];
    APICalls.getCategoryProducts(token, this, chosenCategory);
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
