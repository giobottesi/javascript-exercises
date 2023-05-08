const removeFromArray = function(array, ...args) {
  let newArray = []
  let i = 0

  while (i < array.length) {
    if (![args].flat().includes(array[i])) {
      newArray.push(array[i])
    }
    i++
  }

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
