import React, { Component } from 'react';

/*
 * Contains buttons that interact with API.
 */
class Main extends Component {
  constructor() {
    super();
    this.state = {token: ""};
  }

  loginFunction(pageState) {
    console.log(pageState.token);
  }
  /*
   * Post log in with email and password.
   * Returns a token to be used for other API calls.
   */
  postLogin() {
    var xhr = new XMLHttpRequest();
    var data = "email=bryce%40digital8.com.au&password=bryce";
    var pageState = this.state;
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        pageState.token = JSON.parse(this.responseText)["data"]["token"];
      }
    });
    xhr.open("POST", "http://54.79.111.71:1337/api//user/login");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f69f1133-5838-445d-b015-6ac7210759fc");

    xhr.send(data);
  }

  /*
   * Get a random product.
   */
  getRandomProduct() {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.token);
        var jsonResponse = JSON.parse(this.responseText);
        var image = document.createElement("IMG");
        var random = Math.floor(Math.random() * (jsonResponse["data"].length));
        var imageDiv = document.getElementById("imageFrame");

        while (imageDiv.firstChild) {
          imageDiv.removeChild(imageDiv.firstChild);
        }
        image.setAttribute("src", jsonResponse["data"][random]["image"]);
        imageDiv.appendChild(image);
      }
    });
    console.log(this.state.token);
    xhr.open("GET", "http://54.79.111.71:1337/api//products");
    xhr.setRequestHeader("x-token", this.state.token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "4f71a0d6-38ce-47a7-bbf6-fea2618f93f4");

    xhr.send(data);
  }

  /*
   * Get one product.
   */
  getOneProduct() {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//products/1");
    xhr.setRequestHeader("x-token", this.props.token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f513d1ed-43d6-4446-9e1b-0bef500daaf5");

    xhr.send(data);
  }

  /*
   * Get one bundle.
   */
  getOneBundle() {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//bundles/1");
    xhr.setRequestHeader("x-token", this.props.token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "dd1b4c48-4f8e-4f64-ab1f-d604047a13d8");

    xhr.send(data);
  }

  /*
   * Get a list of all categories.
   */
  getAllCategories() {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//categories");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e7950c88-e0f5-4bc1-a012-02ca46e3e04d");

    xhr.send(data);
  }

  /*
   * Get one category.
   */
  getOneCategory() {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//categories/1");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f038eb57-363f-4326-a486-247c4a3ee2ef");

    xhr.send(data);
  }

  /*
   * Set up xml http request for API.
   * Parameters:
   *   - type: the type of request being made as a string value.
   */
  setUpRequest(type, token) {
    console.log(this.state.token);
    switch(type) {
      case "log in":
        this.postLogin();
        break;
      case "random product":
        this.getRandomProduct();
        break;
      case "one product":
        this.getOneProduct();
        break;
      case "one bundle":
        this.getOneBundle();
        break;
      case "all categories":
        this.getAllCategories();
        break;
      case "one category":
        this.getOneCategory();
        break;
      default:
        console.log("API call type not found.")
    }
  }

  render() {
    return (
      <div>
        <h3>Main page</h3>
        <button onClick={() => this.setUpRequest("log in", "")}>Log in</button>
        <br />
        <button onClick={() => this.setUpRequest("random product", "")}>Get random product</button>
        <br />
        <div id="imageFrame"/>
      </div>
    );
  }
}

export default Main;
