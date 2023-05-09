const fibonacci = function(a) {
  if (a < 0) return "OOPS"
  let n = parseInt(a)
  i = 1
  let fibonacci = 1
  let array = [1]

  while (i < (n - 1)) {
    array.push(fibonacci)
    fibonacci = fibonacci + array[array.length - 2]
    i++
  }

  return fibonacci

};

// Do not edit below this line
module.exports = fibonacci;
