// variables and constants

/*
three types of variables in js

1. var
2. let
3. const

variables are containers (storage areas) for data/text/values
variables basically store ==> number/text and other data types 


*/

// 1.var
// how to declare a variable

var box = 1
var Box = 2
console.log(box+Box)
// 3 output

var firstName = "Abdullah"
var lastName = 'Jawed'
var city = `hyderabad`
console.log(firstName)
console.log(lastName)
console.log(city)

var collegeName = "Code For India Foundation "
console.log(collegeName)

var age = 19
console.log(age)

var phoneNumber = "+919661000000"
console.log(phoneNumber)

var address = "Patna Bihar"
console.log(address)

var favouriteFood = "MOMO"
console.log(favouriteFood)


console.log(firstName,lastName,city,age,phoneNumber,address,favouriteFood)

// if you want to use varibales in a string use bactics
// ==>backticks
// ==> templete literals
console.log(`my name is ${firstName} ${lastName} and my age is ${age} and i live in ${city} and my phone is 
    ${phoneNumber} and my adress is ${address} and my favourite food is ${favouriteFood}`)