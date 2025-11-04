// objects method

// 1. entries method

/**
 

object.entries() in js is a built in method that returns an array
of key-value pairs fro an object





 */
let person ={
    dname: "suhail",
    age:20,
    isAlive: true,
}

let output = Object.entries(person)
console.log(output);

let person1 =[
    ["dname", "suhail"],//0
  //  00         01
    ["age",20],
    //10   11
    ["isAlive", true],
    //20          21
]

console.log(person1[2][0]);
console.log(person1.at(1));

// 2nd object.keys()


/*
returns an array of keys (property names) of the object

*/

let user = {
    fname: "suhail",
    age:20,
    city: "hyd"
}
console.log(Object.keys(user));


// 3rd Object.values()

/*
returns an array  value  from the object

*/

let users = {
    fname: "suhail",
    age:20,
    city: "hyd"
}
console.log(Object.values(user));



