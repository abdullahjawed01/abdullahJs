/*
JSON methods in javaScript

JavaScrpipt provides two main global methods under the JSON Object

1. JSON.stringify()
Converts a JavaScript object -> JSON string 

2. JSON.parse()
Converts a JSON string -> JavaScript Object

*/




let person ={
    fullname : "Abdullah",
    age : 20,
    isALive : true,
    isSleeping: null
}

// console.log(person);
// console.log(typeof person);// object



console.log(person);
console.log(typeof person);
let final = JSON.stringify(person)
console.log(final);
console.log(typeof final);





let person1 = `{"fullname":"Abdullah","age":20,"isALive":true,"isSleeping":null}`

console.log(person1);
console.log(typeof person1);
let convert = JSON.parse(person1)
console.log(convert);
console.log(typeof convert);





