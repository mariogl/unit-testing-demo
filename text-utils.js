function firstLetterToUpperCase(text) {
  if (text === "") {
    return "";
  }
  let firstLetter = text[0];
  return firstLetter.toUpperCase() + text.slice(1);
}

module.exports = firstLetterToUpperCase;
