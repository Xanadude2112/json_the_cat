const request = require("request");

const commandLineContent = process.argv[2].toLowerCase();

request("https://api.thecatapi.com/v1/breeds", (error, response, body) => {
  if (error) {
    console.error("Error:", error);
    return;
  }
  const breeds = JSON.parse(body);
  const matchBreed = breeds.find(breed => breed.name.toLowerCase().includes(commandLineContent));

  if (matchBreed) {
    console.log(matchBreed.description);
  } else {
    console.log(`Breed not found`);
  }

});
