// Imports the fetchBreedDescription function from the 'breedFetcher' module located in the parent directory
const { fetchBreedDescription } = require('../breedFetcher');
// Imports the assert function from the 'chai' library
const { assert } = require('chai');

describe('fetchBreedDescription', () => {
  it('returns a string description for a valid breed, via callback', (done) => {
    fetchBreedDescription('Siberian', (err, desc) => {
      // we expect no error for this scenario
      // Assertion: Checks if the 'err' variable is equal to null
      assert.equal(err, null);

      const expectedDesc = "The Siberians dog like temperament and affection makes the ideal lap cat and will live quite happily indoors. Very agile and powerful, the Siberian cat can easily leap and reach high places, including the tops of refrigerators and even doors.";

      // compare returned description
      // Assertion: Checks if the 'expectedDesc' string is equal to 'desc' string with leading and trailing whitespace removed
      assert.equal(expectedDesc, desc.trim());

      done();
    });
  });

  it('returns "Breed not found" for an invalid breed, via callback', (done) => {
    fetchBreedDescription('InvalidBreedName', (err, desc) => {
      // we expect no error for this scenario
      // Assertion: Checks if the 'err' variable is equal to null
      assert.equal(err, null);

      const expectedDesc = "Breed not found";

      // compare returned description
      // Assertion: Checks if the 'desc' string with leading and trailing whitespace removed is equal to the 'expectedDesc' string
      assert.equal(desc.trim(), expectedDesc);

      done();
    });
  });
});