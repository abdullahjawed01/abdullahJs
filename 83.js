// Math methods

/**
In js , the math object provides a set of built-in mathematical methods and constants for performing common math operation - like rounding numbers,generating random values, trigonometry, logorithms , etc. 

*/

let a = Math.abs(-5)//5

let b = Math.round(4.7)//5

let c = Math.ceil(4.1)//5

let d = Math.floor(4.9)//4

let e = Math.trunc(4.9)//4

let f = Math.sign(26)//1  positive 1 for all positive ,, 0 for 0,,   -1 for all negetive

console.log(a);//5
console.log(b);//5
console.log(c);//5
console.log(d);//4
console.log(e);//4
console.log(f);//-1



let g = Math.random()// basic only numbers between 0-1
console.log(g);


// cusotm range  random, btw min and max
// Math.random()*(max-min)+min

console.log(Math.random()*(100-10)+10);// to remove decimals 
console.log(Math.floor(Math.random()*(100-10)+10));



let min = 1
let max = 100

let randomNumber = Math.floor(Math.random()*(max+1 - min)+min)
console.log(randomNumber);