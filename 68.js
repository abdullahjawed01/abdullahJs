// Number Methods

// let a = 10;
// let b = 53.24;



// 1.st  parseFloat()
// They are built - in js function that converts strings into function

// convert to decimal numbet
  // string to number


console.log(parseFloat("43.5"));//43.5
console.log(parseFloat("99.43cm23"));// 99.43
console.log(parseFloat("cm 99.23"));// Nan
console.log(parseFloat("a1b23c"));// Nan


// 2. pasrInt ...... converts to number
// 1)we use parseInt for number system
// 2) remove also decimal point

// getting decimal using binary
console.log(parseInt("1111",2));//15
console.log(parseInt("1010",2));//10
console.log(parseInt("1000",2));//8
console.log(parseInt("1100100",2));//100
console.log(parseInt("1100011",2));//99


// removing decimal 
console.log(parseInt("45.323"));// 45




//3) toFixed()
let num = 57.2423;

console.log(num.toFixed());// 58-> rounded off, no fractional part
console.log(num.toFixed(1));//57.2
console.log(num.toFixed(7));//57.2423000// if decimal is ended then (its add 0 till the digit end like total 7) 
console.log(num.toFixed(2));//57.24




// toLocaleString()

/*
toLocaleString() is a  number method that formats a number according to a specific locale (country/language) or
style - like adding commas, currency, or percentage.

*/

// syntax ==> number.toLocaleString([locales],[options])
//

/* 
locales -> optional strinf like "en-US" , "hi-IN" , "de-DE", etc
(defines language and region format)

options => optional object to control formatting style 
(currency, decimals , etc.)

*/



let n = 122332423423.89;
// console.log(n.toLocaleString());

console.log(n.toLocaleString("en-US"));
console.log(n.toLocaleString("de-DE"));
console.log(n.toLocaleString("hi-IN"));




let price = 2500;

console.log(price.toLocaleString("en-US",{style: "currency", currency: "USD"}));
console.log(price.toLocaleString("hi-IN",{style: "currency", currency: "INR"}));
console.log(price.toLocaleString("ja-JP",{style: "currency", currency: "JPY"}));
console.log(price.toLocaleString("ar-SA",{style: "currency", currency: "SAR"}));
console.log(price.toLocaleString("en-US",{style: "percent"}));








