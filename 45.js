// array methods
//17 . every method
// check if every element in array passes a test (returns true/false)

const numbers = [2,4,6,8];

let check = numbers.every(test);

function test(num){
    return num % 2 === 0;
}

console.log(check); // true , all elements are even


const numbers1 = [2,3,6,8];

let check1 = numbers1.every((num) => num > 0);

console.log(check1); // true , all elements are positive
// it returns the output in boolean values


// 18. Find () method
// returns the value of the first element that passes a test
// returns the first elemenet that satisfies a condition
// >   <   >=   <=    x%2==0.even   x%2==1..oddsss

const num = [2,4,6,8];

let checks = num.find(test);

function test(num){
    return num >= 6;
}

console.log(checks); // 6



