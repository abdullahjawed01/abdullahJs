// Type Conversion in JavaScript
// Chnanging dataypes from one type to another

// Ex: let a = "10"
// convert 10 of string to 10 of number

// There are 2 types of conversion in JS

// 1. Implicit Conversion
// 2. Explicit Conversion

// 1.Implicit Conversion : ==> Automatic Conversions 


// 1.  Anything(any data type) to string 

// num + str
// str+str
// boolean + str
// null + str
// undefined +str


let result = 2 + "" ;
// console.log(typeof result);


let a = 2 +"1";
// console.log(a);

let b = true + "4"
// console.log(b);

let c = 2+ 4 
// console.log(c);

let d = undefined + "3";
// console.log(d);

let e = null + "abdullah"
// console.log(e);


// Anything to Number (use only -,/,*)

let f 
// f = "5" - "3"
// f = "5" - 3
// f = "5" * 3
// f = 10 / "2"
f = "hello" - "hi" // NaN output means not an number
console.log(f);




// Anything to Boolean
// True = 1
// False = 0

let f1 = "5" - true;// output 4
let f2 = 2 + true;// 3
let a3 = 0 + false// 0 
console.log(f1);
console.log(f2);
console.log(a3);


// Null to Number
// null = 0

let c1 = 4 + null;
console.log(typeof c1, c1);



// Undefined to null

let d1 = undefined + 5;// NaN always becomes undefind not a number 
console.log(d1);









