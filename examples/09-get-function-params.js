function formatFullName(nameObject) {
  const first = nameObject.first;
  const middleInitial = nameObject.middleInitial;
  const last = nameObject.last;
  return first + " " + middleInitial + " " + last;
}
const fullName = formatFullName({
  first: "Jenna",
  middleInitial: "T",
  last: "Davis"
});

console.log(fullName); // Jenna T Davis
