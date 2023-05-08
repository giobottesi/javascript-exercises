function repeatString(string, repetition) {
  i = 0
  newString = ""

  if (repetition < 0) {
    return "ERROR"
  }

  while (i < repetition) {
    newString = newString.concat(string)
    i++
  }

  return newString;
};

// Do not edit below this line
module.exports = repeatString;
