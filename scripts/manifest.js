const path = require("path");

const EXAMPLE_PATH = path.resolve(__dirname, "../examples");
const EXERCISES_PATH = path.join(__dirname, "../exercises");
const HOMEWORK_PATH = path.join(__dirname, "../homework");

const examples = {
  "concat-string": path.join(EXAMPLE_PATH, "01-concat-string.js"),
  "template-literals": path.join(EXAMPLE_PATH, "02-template-literals.js"),
  "function-keyword": path.join(EXAMPLE_PATH, "03-function-keyword.js"),
  "arrow-function": path.join(EXAMPLE_PATH, "04-arrow-function.js"),
  "get-object-property": path.join(EXAMPLE_PATH, "05-get-object-property.js"),
  "get-array-element": path.join(EXAMPLE_PATH, "06-get-array-element.js"),
  "destructure-object": path.join(EXAMPLE_PATH, "07-destructure-object.js"),
  "destructure-array": path.join(EXAMPLE_PATH, "08-destructure-array.js"),
  "get-function-params": path.join(EXAMPLE_PATH, "09-get-function-params.js"),
  "destructure-function-params": path.join(
    EXAMPLE_PATH,
    "10-destructure-function-params.js"
  ),
  "rest-of-object": path.join(EXAMPLE_PATH, "11-rest-of-object.js"),
  "rest-of-array": path.join(EXAMPLE_PATH, "12-rest-of-array.js"),
  "rest-of-function-params": path.join(
    EXAMPLE_PATH,
    "13-rest-of-function-params"
  )
};

const exercises = {};

const homework = {
  "question-1": path.join(HOMEWORK_PATH, "01-shopping-list.js"),
  "question-2": path.join(HOMEWORK_PATH, "02-pet-data.js")
};

module.exports = {
  examples,
  exercises,
  homework
};
