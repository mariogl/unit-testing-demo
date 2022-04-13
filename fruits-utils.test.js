function getApplesFirstPosition(fruits) {
  if (!Array.isArray(fruits)) {
    throw new Error("Please provide an array of fruits");
  }

  let position = null;
  for (let i in fruits) {
    if (fruits[i] === "apples" || fruits[i] === "Apples") {
      position = +i;
      break;
    }
  }

  return position;
}

describe("Given a getApplesFirstPosition function", () => {
  describe("When it receives ['watermelons', 'melons', 'apples', 'bananas']", () => {
    test("Then it should return 2", () => {
      const fruits = ["watermelons", "melons", "apples", "bananas"];
      const expectedPosition = 2;

      const applesPosition = getApplesFirstPosition(fruits);

      expect(applesPosition).toBe(expectedPosition);
    });
  });

  describe("When it receives ['watermelons', 'pineapples']", () => {
    test("Then it should return null", () => {
      const fruits = ["watermelons", "pineapples"];

      const applesPosition = getApplesFirstPosition(fruits);

      expect(applesPosition).toBeNull();
    });
  });

  describe("When it receives 'apples'", () => {
    test("Then it should throw an error with the message 'Please provide an array of fruits'", () => {
      const fruits = "apples";

      expect(() => {
        getApplesFirstPosition(fruits);
      }).toThrowError("Please provide an array of fruits");
    });
  });
});
