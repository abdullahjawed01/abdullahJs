// string methods

// 1. charAt()
// convert your string as indexes

let str1 = "hello"
 //         01234
console.log(str1.charAt(1));
console.log(str1.charAt(0));


// 2. concat () method
 let a1 = "hello"
 let b1 = " world"
console.log(a1.concat(b1));
//hello world


// 3. includes

let c1 = "hello i am cfi student"
console.log(c1.includes("cfi"));



// 4. length 
// length of the string

let d1 = "hello"
console.log(d1.length);


// 5. indexOf
// telling index of the letter
let e1 = "helloworld"
console.log(e1.indexOf("e"));


// 6. lastIndexOf 
let f1 = "hello"
console.log(f1.lastIndexOf("l"));

// 7. repeat() method
// repeat any element
let g1 = "Test CFI \n"
console.log(g1.repeat(10));




// 8. replace() method
// replace world with cfi

let h1 = "hello world"
console.log(h1.replace("world","CFI"));

// 9. split() method
// convert string into array 
// using element you given

let i1 = "hello,i,am,Abdullah"
console.log(i1.split(","));


// 10. toUppercase()
// change to upper case
let j = "hello cfi student"
console.log(j.toUpperCase());


// 11. toLowerCase()
// change to lower case
let k = "Hello IAM Abdullah"
console.log(k.toLowerCase());


// 12. trim() method
// can be used in user form   
// remove speaces from start and end off space

let k1 = "   Hello I am CFI  "
console.log(k1);
console.log(k1.trim());



// 13. slice() method

let m1 = "hello"
// index  01234
// len    12345
console.log(m1.slice(0,3));
// print part of string like here it will print "hel" which mean index is 0 and length is 3


//14. padStart method()
// add ***** or anything infront of string using pad start including lenght
// which mean i use 15 then hello is 5 character then it will print * 10 times
let n1 = "hello"
console.log(n1.padStart(15,"*"));


// 15. padEnd() method

let o1 = "hello"
console.log(n1.padEnd(10,"*"));