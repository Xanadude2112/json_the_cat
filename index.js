const { fetchBreedDescription } = require('./breedFetcher');

const commandLineContent = process.argv[2] ? process.argv[2].toLowerCase() : undefined;

fetchBreedDescription(commandLineContent, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});