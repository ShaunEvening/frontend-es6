const formatFullName = ({ first, middleInitial, last }) =>
  `${first} ${middleInitial} ${last}`;

const fullName = formatFullName({
  first: "Jenna",
  middleInitial: "T",
  last: "Davis"
});

console.log(fullName); // Jenna T Davis
