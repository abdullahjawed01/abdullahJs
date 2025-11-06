/*

JavaScript ES6 (also known as ECMSScript2015 or EcmaScript6) is the sixth edition of js ointroduced in june 2015

ecma Script (european Computer Manufacturers Association script) is the standard specification of js  to ensure compatibility in all browsers and environment


This tutorial provides a summary of commonly used features and suntax improvements of ES6
*/


// 

//1. let and const 
//2. Arrow Function
//3. Template Literals
//4. Default parameters

function sayHello(name="Guest",age =0){
console.log(`my name is ${name} and my age is ${age}`)
}
sayHello()// priotrize = thing given in arguments but if nothinf is there is arguments it will print from parameters





//5. Destructuring Assignment

let person = {
    fname: "Suhail",
    age: 10,
    isAlive:true,
    isSleeping: null,
}


let {fname, age,isAlive, isSleeping} = person;
console.log(fname,age,isAlive,isSleeping);



// let a = person.age;
// console.log(a)// 10


// array destructuring

let arr = ["suhail",20,null,undefined]

let [a,b,c,d] = arr;
console.log(a,b,c,d);

