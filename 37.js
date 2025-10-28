// Objects in js 

// Non primtive ==> you can store multiple data types
// object uses key value pairs
// left side is key and right side is value
// to access vlaue use the key
// ex: fname:  "suhail"
// key : value
// add , after each value


let person = {
    fname : "suhail",
    phone : 964145575544,
    age: 10,
    isAlive : true,
    isSleeping: null,
    health : undefined
}
console.log(person);

// how to access objects keys

//1. dot notation
console.log(person.fname);
console.log(person.age);
console.log(person.phone);
console.log(person.isAlive,person.isSleeping,person.health);


//2. using bracket notation

console.log(person["fname"]);
console.log(person["age"]);
console.log(person["phone"]);
console.log(person["isAlive"]);
console.log(person["health"],person["isSleeping"]);



