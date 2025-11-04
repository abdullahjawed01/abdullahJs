// 4. Object.freeze()
/*
you cannot add, remove , or change properties
 
it makes the object  complete immutable

*/



let users = {
    fname: "suhail",
    age:20,
    city: "hyd"
}

Object.freeze(users)
console.log(users);


// 5. isFrozen


// it gives an output of boolean value if the arrays is either true or false

let person = {
    fname: "suhail",
    age:20,
    city: "hyd"
}

console.log(Object.isFrozen(person));// false
Object.freeze(person)
console.log(Object.isFrozen(person));// true


