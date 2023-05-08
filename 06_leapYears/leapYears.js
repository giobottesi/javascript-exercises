const leapYears = function(year) {

  function divisibleByFour (year) {
    return year % 4 === 0
  }

  function divisibleByHundred (year) {
    return year % 100 === 0
  }

  function divisibleByFourHundred (year) {
    return year % 400 === 0
  }

  return ((divisibleByFour(year) && !divisibleByHundred(year)) || divisibleByFourHundred(year))
};

// Do not edit below this line
module.exports = leapYears;
