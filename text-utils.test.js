function firstLetterToUpperCase(text) {
  if (text === "") {
    return "";
  }
  let firstLetter = text[0];
  return firstLetter.toUpperCase() + text.slice(1);
}

// Given: lo que voy a testear
// When: descripción del escenario de pruebas
// Then: lo que esperamos que ocurra

describe("Given a firstLetterToUpperCase function", () => {
  describe("When it receives 'boquerons in vinagre'", () => {
    test("Then it should return 'Boquerons in vinagre'", () => {
      // A-A-A
      // Arrange: monta el escenario / recopila los valores que vas a enviar y que esperas
      const text = "boquerons in vinagre";
      const expectedText = "Boquerons in vinagre";

      // Act: haz que funcione la máquina
      const textResult = firstLetterToUpperCase(text);

      // Assert: comprueba que ha pasado lo que esperas
      expect(textResult).toBe(expectedText);
    });
  });

  describe("When it receives ''", () => {
    test("Then it should return ''", () => {
      const text = "";
      const expectedText = "";

      const textResult = firstLetterToUpperCase(text);

      expect(textResult).toBe(expectedText);
    });
  });
});
