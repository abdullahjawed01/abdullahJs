function greet(name) {
    console.log(`Hello ${name}`);
}

// pass "John" as argument
greet("John");

// pass "David" as argument
greet("David");


greet("Abdullah");




// to add multiple arguments or call in one function 

function addNumber(num1 , num2){
    sum = num1 + num2,
    console.log(sum);
}

addNumber(125 , 123332)


// for rootinng

function findSquare(num) {
    return num*num
}

let square = findSquare(3)
console.log(square);

//Math.sqrt()	Returns the square root of a number.
// Math.pow()	Returns the power of a number.
// toUpperCase()	Returns the string converted to uppercase.
// toLowerCase()	Returns the string converted to lowercase.


let squares = Math.sqrt(4)
console.log(squares);


let powers = Math.pow(50, 5);
console.log(powers);

Abc = "Abdullah Jawed is a very polite and elegemt person out there "
let uppercase = Abc.toUpperCase()
console.log(uppercase);



