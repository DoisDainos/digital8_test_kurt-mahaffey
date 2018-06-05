# digital8_test_kurt-mahaffey
Programming test for the web developer internship position at Digital8.<br />
### What is it?
Web app that gets users to guess the price range of certain products based on product images.<br />
### How is it useful?
This app would be a valuable way to gauge what consumers think is a good price range for certain products based on their branding and appearance.<br />
Players can also request the product name to make a better guess at the price. It would be interesting to see what products users request the name of, as it will provide insight into what products people are unfamiliar with.<br />
### How does it work?
Upon page load, the login POST call is made and a token is retrieved. This token is used for subsequent API calls. 
Making a game where player must guess the price of a randomly shown product. First a category of product must be chosen, then random products of this category are shown. Player can ask for a hint, which reveals the name of the product at the expense of some score.  
### Try it out: https://doisdainos.github.io/digital8_test_kurt-mahaffey/
#### (Currently need to allow for loading unsafe scripts as trying to serve http requests on https)
