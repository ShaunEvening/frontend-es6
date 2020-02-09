const { createShoppingList } = require("./01-shopping-list");
const { getFirstPet } = require("./02-pet-data");

describe("ES6 Homework Checker", () => {
  describe("QUESTION 1:", () => {
    it("SHOPPING LIST: given no items it should return an empty list", () => {
      const actual = createShoppingList();
      const expected = `This is my shopping list:`;

      expect(actual).toEqual(expected);
    });

    it("SHOPPING LIST: given any number items it should return a list with all items in it", () => {
      const actual = createShoppingList(
        "olive oil",
        "salt",
        "bread",
        "ice cream"
      );
      const expected =
        "This is my shopping list:\nolive oil\nsalt\nbread\nice cream";

      expect(actual).toEqual(expected);
    });
  });

  describe("QUESTION 2:", () => {
    it("PET DATA: given some pet data it should return the first pet and it's owner", () => {
      const testData = {
        pets: [
          { name: "Optimus", human: "Shaun" },
          { name: "Moose", human: "Nat" },
          { name: "Donut", human: "Cheyenne " }
        ],
        humans: [{ name: "Shaun" }, { name: "nat" }, { name: "Cheyenne" }]
      };

      const actual = getFirstPet(testData);
      const expected = "The first pet is Optimus who lives with Shaun";

      expect(actual).toEqual(expected);
    });
  });
});
