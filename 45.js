//17 . every method
// check if every element in array passes a test (returns true/false)

const numbers = [2,4,6,8];

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true
const mixedNumbers = [1,2,3,4];

const allEvenMixed = mixedNumbers.every(num => num % 2 === 0);
console.log(allEvenMixed); // false


