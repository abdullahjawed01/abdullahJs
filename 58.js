// for in loop 

/*
 used to loop through the properties (keys) 
 of an object
 or value
*/


let myDetails = {
    fullname : "suhail",
    age: 20,
    isAlive: true,
}

for (let value in myDetails){
    console.log(myDetails[value]);// to print only values
}

