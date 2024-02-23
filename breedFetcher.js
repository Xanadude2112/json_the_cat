const request = require("request");

// Declares a function named fetchBreedDescription which takes two parameters: breedName and callback
const fetchBreedDescription = function(breedName, callback) {
  // Checks if breedName is truthy, if so, converts it to lowercase; otherwise, sets it to undefined
  breedName = breedName ? breedName.toLowerCase() : undefined;
  // Makes a request to the specified URL using the request function
  // The URL contains the breedName parameter interpolated into the string
  request(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback("Error:", error);
        return;
      }
      // Parses the response body from JSON format to a JavaScript object
      const breeds = JSON.parse(body);
      // Searches for a breed within the breeds array that matches the provided breedName
      // The matchBreed variable will store the matched breed object
      const matchBreed = breeds.find((breed) => breed.name.toLowerCase().includes(breedName));

      if (matchBreed) {
        callback(null, matchBreed.description);
      } else {
        callback(null, `Breed not found`);
      }
    }
  );
};

module.exports = { fetchBreedDescription };
