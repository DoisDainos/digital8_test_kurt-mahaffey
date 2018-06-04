import React, { Component } from 'react';
import APICalls from './APICalls';
import Button from '@material-ui/core/Button';
import LinearProgress from '@material-ui/core/LinearProgress';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

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
      progress: 0,
      hintOpen: false
    }
  }

  /*
   * Takes the image field of a product and adds it to the document frame.
   */
  addProductImageToFrame(product) {
    var image = document.createElement("IMG");
    var imageDiv = document.getElementById("frame");
    var hintBox = document.getElementById("hint-box");
    if (hintBox.childNodes[1]) {
      hintBox.removeChild(hintBox.childNodes[1]);
    }
    document.getElementById("hint-button").style.display="inline-block";
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
    var winDisplay = document.createElement("H4");
    document.getElementById("hint-button").style.display="none";
    while (frame.firstChild) {
      frame.removeChild(frame.firstChild);
    }
    frame.appendChild(document.createTextNode("GAME COMPLETE"));
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
      this.setState({progress: this.state.progress + 34});
      round += 1;
      if (round === this.state.rounds) {
        this.gameEnd();
      } else {
        this.playRound(round);
      }
    } else {
      document.getElementById("input").value = "";
      this.setState({score: this.state.score - 20});
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
    document.getElementById("hint-button").style.display = "inline-block";
    document.getElementById("score").style.display = "inline-block";
    this.shuffleProductsArray();
    this.playRound(0);
  }

  componentDidMount() {
    var chosenCategory = this.props.location.pathname.split("/")[3];
    document.getElementById("game-heading").innerHTML = "Category: " +
    chosenCategory;
    document.getElementById("hint-button").style.display = "none";
    document.getElementById("score").style.display = "none";
    this.setState({category: chosenCategory});
    var token = this.props.location.pathname.split("/")[2];
    APICalls.getCategoryProducts(token, this, chosenCategory);
  }

  toggleHint() {
    if (!this.state.hintOpen) {
      this.setState({hintOpen: true});
    } else {
      this.setState({hintOpen: false});
    }
  }

  showHint() {
    var hint;
    this.toggleHint();
    this.setState({score: this.state.score - 20});
    document.getElementById("hint-button").style.display="none";
    hint = document.createElement("P");
    hint.innerHTML = this.state.products[this.state.progress/34]["name"];
    document.getElementById("hint-box").appendChild(hint);
  }

  render() {
    return (
      <div>
        <h3 id="game-heading">Game page</h3>
        <h3 id="score">Score: {this.state.score}</h3>
        <div id="round-display">
          <p id="game-intro">Guess the price of the items</p>
          <LinearProgress variant="determinate" value={this.state.progress} />
          <br />
          <Button id="start-game" variant="raised" color="primary"
          onClick={() => this.startGame()}>
            Start game
          </Button>
          <Dialog
            open={this.state.hintOpen}
          >
            <div className="dialog-info">
              <h3>See product name?</h3>
              <p>You will lose 20 points.</p>
            </div>
            <DialogActions>
              <Button onClick={() => this.toggleHint()} color="primary">
                No
              </Button>
              <Button onClick={() => this.showHint()} color="primary" autoFocus>
                Yes
              </Button>
            </DialogActions>
          </Dialog>
          <div id="hint-box">
            <Button id="hint-button" onClick={() => this.toggleHint()}>
              See name
            </Button>
          </div>
          <div id="frame"/>
        </div>
      </div>
    );
  }
}

export default Game;
