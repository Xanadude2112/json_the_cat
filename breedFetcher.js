const request = require("request");

const commandLineContent = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

const fetchBreedDescription = function(breedName, callback) {
  breedName = breedName ? breedName.toLowerCase() : undefined;
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (error, response, body) => {
    if (error) {
      callback("Error:", error);
      return;
    }
    const breeds = JSON.parse(body);
    const matchBreed = breeds.find(breed => breed.name.toLowerCase().includes(breedName));
  
    if (matchBreed) {
      callback(null, matchBreed.description);
    } else {
      callback(null, `Breed not found`);
    }
  });


};

module.exports = {fetchBreedDescription};