const findTheOldest = function(people) {
  getAge = people.map((person) => {
    person.age = ((person.yearOfDeath != undefined ? person.yearOfDeath : (new Date().getFullYear())) - person.yearOfBirth)
    return person
  })

  sortedPeople = getAge.sort((a, b) => (a.age > b.age) ? -1 : 1)

  return sortedPeople[0]
};

// Do not edit below this line
module.exports = findTheOldest;
