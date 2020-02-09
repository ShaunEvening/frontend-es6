// Objects
const cat = { name: "Moose", color: "gray", age: 10 };
const { age, ...restOfCat } = cat;
console.log(age); // 10
console.log(restOfCat); // { name: 'Moose', color: 'gray' }
