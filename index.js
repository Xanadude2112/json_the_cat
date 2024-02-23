const { fetchBreedDescription } = require('./breedFetcher');

// Retrieves the command line argument provided at index 2
// If no argument is provided, it sets commandLineContent to undefined
const commandLineContent = process.argv[2] ? process.argv[2].toLowerCase() : undefined;
// Calls the fetchBreedDescription function with the commandLineContent as the breedName parameter
// It also provides a callback function to handle the response from fetchBreedDescription
fetchBreedDescription(commandLineContent, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});