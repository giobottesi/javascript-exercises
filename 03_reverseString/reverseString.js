function reverseString (string) {
  splitArray = string.split("")
  reversedArray = splitArray.reverse()
  reversedString = reversedArray.join("")

  return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
