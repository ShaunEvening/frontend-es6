/*
  Bridge Front-end Development
  ES6 & modern JavaScript

  ES6 get elements from an array with destructuring Example

  Run this Example by running the following in your terminal:
    npm run example destructure-array
*/

const numbers = [1, 2, 3, 4];
const [firstNumber, , thirdNumber] = numbers;
console.log(firstNumber, thirdNumber); // 1 3
