/*
    Question 1: Create Shopping List
    
    Updata the "createShoppingList" function using ES6 features
    to create a function that takes an unknown amount of
    arguments and displays them as a list.
*/
function createShoppingList() {
  return `This is my shopping list:`;
}

/*
The following should return

This is my shopping list:
oranges
apples
bananas
*/
console.log(createShoppingList("oranges", "apples", "bananas"));

// Please leave this alone for the homework checker
module.exports = {
  createShoppingList
};
