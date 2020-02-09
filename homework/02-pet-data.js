/*
    Question 2: Get the last pet and their human

    Given "petData" update the "getFirstPet" using ES6 features
    Get the last pet and find it's owner and return the data as a sentence

*/
function getFirstPet(data) {
  return `The first pet is Big Floof, it lives with Connor`;
}

const petData = {
  pets: [
    { name: "Carrot", human: "Emily" },
    { name: "Big Floof", human: "Connor" }
  ],
  humans: [{ name: "Emily" }, { name: "Connor" }]
};

/*
    The following should return

    The first pet is Carrot who lives with Emily
*/
console.log(getFirstPet(petData));

// Please leave this alone for the homework checker
module.exports = {
  getFirstPet
};
