import React, { Component } from 'react';

/*
 * Contains buttons that interact with API.
 */
class Main extends Component {
  /*
   * Post log in with email and password.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  postLogin(xhr) {
    var data = "email=bryce%40digital8.com.au&password=bryce";

    xhr.open("POST", "http://54.79.111.71:1337/api//user/login");
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f69f1133-5838-445d-b015-6ac7210759fc");

    xhr.send(data);
  }

  /*
   * Get a list of all products.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  getAllProducts(xhr) {
    var data = null;

    xhr.open("GET", "http://54.79.111.71:1337/api//products");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "dc338138-3a1f-4ded-af28-0f7dc18eeb32");

    xhr.send(data);
  }

  /*
   * Get one product.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  getOneProduct(xhr) {
    var data = null;

    xhr.open("GET", "http://54.79.111.71:1337/api//products/1");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f513d1ed-43d6-4446-9e1b-0bef500daaf5");

    xhr.send(data);
  }

  /*
   * Get one bundle.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  getOneBundle(xhr) {
    var data = null;

    xhr.open("GET", "http://54.79.111.71:1337/api//bundles/1");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "dd1b4c48-4f8e-4f64-ab1f-d604047a13d8");

    xhr.send(data);
  }

  /*
   * Get a list of all categories.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  getAllCategories(xhr) {
    var data = null;

    xhr.open("GET", "http://54.79.111.71:1337/api//categories");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e7950c88-e0f5-4bc1-a012-02ca46e3e04d");

    xhr.send(data);
  }

  /*
   * Get one category.
   * Parameters:
   *   - xhr: xml http request passed from set up.
   */
  getOneCategory(xhr) {
    var data = null;

    xhr.open("GET", "http://54.79.111.71:1337/api//categories/1");
    xhr.setRequestHeader("x-token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJicnljZUBkaWdpdGFsOC5jb20uYXUiLCJmaXJzdE5hbWUiOiJCcnljZSIsImxhc3ROYW1lIjoiSm9obnNvbiIsImlhdCI6MTUyNzY1MDgyNCwiZXhwIjoxNTI3NjU0NDI0fQ.vBPxFK0blP2-3fNydZ7OXyDrpXP_tPnsXgBRD6jXric");
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "ff92fbdf-e3f5-479c-812d-dede9043831d");

    xhr.send(data);
  }

  /*
   * Set up xml http request for API.
   * Parameters:
   *   - type: the type of request being made as a string value.
   */
  setUpRequest(type) {
    console.log(type);

    var xhr = new XMLHttpRequest();
    xhr.withCredentials = false;

    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    switch(type) {
      case "log in":
        this.postLogin(xhr);
        break;
      case "all products":
        this.getAllProducts(xhr);
        break;
      case "one product":
        this.getOneProduct(xhr);
        break;
      case "one bundle":
        this.getOneBundle(xhr);
        break;
      case "all categories":
        this.getAllCategories(xhr);
        break;
      case "one category":
        this.getOneCategory(xhr);
        break;
      default:
        console.log("API call type not found.")
    }
  }

  render() {
    return (
      <div>
        <h3>Main page</h3>
        <button onClick={() => this.setUpRequest("log in")}>Log in</button>
        <br />
        <button onClick={() => this.setUpRequest("all products")}>Get all products</button>
        <br />
        <button onClick={() => this.setUpRequest("one product")}>Get one product</button>
        <br />
        <button onClick={() => this.setUpRequest("one bundle")}>Get one bundle</button>
        <br />
        <button onClick={() => this.setUpRequest("all categories")}>Get all categories</button>
        <br />
        <button onClick={() => this.setUpRequest("one category")}>Get one category</button>
      </div>
    );
  }
}

export default Main;
