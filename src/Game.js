import React, { Component } from 'react';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';
import Progress from 'react-progressbar'

/*
 * Contains buttons that interact with API.
 */
class Game extends Component {
  constructor() {
    super();
    this.state = {
      category: "",
      products: [],
      rounds: 3,
      score: 0,
      progress: 0
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
    imageDiv.appendChild(document.createElement("BR"));
    imageDiv.appendChild(document.createElement("BR"));
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
   * Handles ending the game.
   */
  gameEnd() {
    var frame = document.getElementById("frame");
    while (frame.firstChild) {
      frame.removeChild(frame.firstChild);
    }
    frame.appendChild(document.createTextNode("GAME COMPLETE"));
    var winDisplay = document.createElement("H4");
    winDisplay.innerHTML = "Your score: " + this.state.score;
    frame.appendChild(winDisplay);
    console.log("You win!");
  }

  /*
   * Action to be taken when the user submits a guess.
   * Parameters:
   * - product: focus of the round
   * - round: integer denoting the current round
   */
  handleSubmit(product, round) {
    var guess;
    guess = document.getElementById("input").value;
    if (guess == product["price"]) {
      this.setState({score: this.state.score + 100});
      this.setState({progress: this.state.progress + 33});
      round += 1;
      if (round === this.state.rounds) {
        this.gameEnd();
      } else {
        this.playRound(round);
      }
    } else {
      document.getElementById("input").value = "";
      this.setState({score: this.state.score - 20});
      if (this.state.score <= 0) {
        this.setState({score: 0});
      }
      console.log("wrong");
    }
  }

  /*
   * Add the text input area and submit button to the round display.
   * Parameters:
   * - round: integer denoting the current round
   */
  addInput(round) {
    var textInput = document.createElement("INPUT");
    var submitButton = document.createElement("BUTTON");
    var product = this.state.products[round];
    var component = this;
    var guess;
    textInput.type = "text";
    textInput.setAttribute("id", "input");
    textInput.style.width = "20vw";
    submitButton.innerHTML = "Submit";
    submitButton.addEventListener("click", function() {
      component.handleSubmit(product, round);
    });
    document.getElementById("frame").appendChild(textInput);
    document.getElementById("frame").appendChild(submitButton);

  }

  /*
   * Display a product's price in the frame.
   * Parameters:
   * - product: price of this product will be displayed
   */
  displayPrice(product) {
    var price = document.createElement("P");
    price.innerHTML = "$" + product["price"];
    document.getElementById("frame").appendChild(price);
  }

  /*
   * Play a round.
   * Parameters:
   * - round: integer denoting the current round
   */
  playRound(round) {
    this.addProductImageToFrame(this.state.products[round]);
    this.addInput(round);
    this.displayPrice(this.state.products[round]);
  }

  /*
   * Start game by randomsing the order of products and playing the first round.
   */
  startGame() {
    document.getElementById("game-intro").style.display = "none";
    document.getElementById("start-game").style.display = "none";
    this.shuffleProductsArray();
    this.playRound(0);
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
        <p id="game-intro">Guess the price of the items</p>
        <Progress completed={this.state.progress} />
        <Button id="start-game" variant="raised" color="primary"
        onClick={() => this.startGame()}>
          Start game
        </Button>
        <br />
        <div id="frame"/>
      </div>
    );
  }
}

export default Game;
