const add = function(a, b) {
	return a + b
};

const subtract = function(a, b) {
	return a - b
};

const sum = function(array) {
  if (array.length === 0) return 0

  let sum = 0
	array.forEach(element => sum = sum + element)

  return sum
};

const multiply = function(array) {
  let multiply = 1
	array.forEach(element => multiply = multiply * element)

  return multiply
};

const power = function(a, b) {
	return Math.pow(a,b)
};

const factorial = function(a) {
	let factorial = 1
  i = 1
  while (i<=a) {
    factorial = factorial * i
    i++
  }

  return factorial
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
