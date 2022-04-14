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

module.exports = getApplesFirstPosition;
