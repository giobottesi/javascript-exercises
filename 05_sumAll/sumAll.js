const sumAll = function(first, second) {
  if((first < 0 || second < 0) || (typeof(first) != "number" || typeof(second) != "number")){
    return "ERROR"
  }

  let min = Math.min(first, second)
  let max = Math.max(first, second)
  
  let length = max - min
  let i=0
  let a = min
  let b = min + 1

  while (i<length) {
    a = a + b
    b = b + 1

    i++
  }

  return a
};

// Do not edit below this line
module.exports = sumAll;
