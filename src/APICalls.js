
/*
  Defines functions for API calls.
*/
export class APICalls {
  /*
   * Post log in with email and password.
   * Returns a token to be used for other API calls.
   * Parameters:
   * - pageState: the state containing token prop to be altered.
   */
  static postLogin(component) {
    var xhr = new XMLHttpRequest();
    var data = "email=bryce%40digital8.com.au&password=bryce";
    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        component.setState({token: JSON.parse(this.responseText)["data"]["token"]});
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
   * Parameters:
   * - token: the string value to be sent in the request header.
   */
  static getRandomProduct(token) {
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
    xhr.open("GET", "http://54.79.111.71:1337/api//products");
    xhr.setRequestHeader("x-token", token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "4f71a0d6-38ce-47a7-bbf6-fea2618f93f4");

    xhr.send(data);
  }

  /*
   * Get one product.
   * Parameters:
   * - token: the string value to be sent in the request header.
   */
  static getOneProduct(token) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//products/1");
    xhr.setRequestHeader("x-token", token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f513d1ed-43d6-4446-9e1b-0bef500daaf5");

    xhr.send(data);
  }

  /*
   * Get one bundle.
   * Parameters:
   * - token: the string value to be sent in the request header.
   */
  static getOneBundle(token) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//bundles/1");
    xhr.setRequestHeader("x-token", token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "dd1b4c48-4f8e-4f64-ab1f-d604047a13d8");

    xhr.send(data);
  }

  /*
   * Get a list of all categories.
   * Parameters:
   * - token: the string value to be sent in the request header.
   */
  static getAllCategories(token) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//categories");
    xhr.setRequestHeader("x-token", token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "e7950c88-e0f5-4bc1-a012-02ca46e3e04d");

    xhr.send(data);
  }

  /*
   * Get one category.
   * Parameters:
   * - token: the string value to be sent in the request header.
   */
  getOneCategory(token) {
    var xhr = new XMLHttpRequest();
    var data = null;

    xhr.withCredentials = false;
    xhr.addEventListener("readystatechange", function () {
      if (this.readyState === 4) {
        console.log(this.responseText);
      }
    });

    xhr.open("GET", "http://54.79.111.71:1337/api//categories/1");
    xhr.setRequestHeader("x-token", token);
    xhr.setRequestHeader("Cache-Control", "no-cache");
    xhr.setRequestHeader("Postman-Token", "f038eb57-363f-4326-a486-247c4a3ee2ef");

    xhr.send(data);
  }
}

export default APICalls;
