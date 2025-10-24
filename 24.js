// loops in js

/*
Loops are used to execute a block of code repeatedly as long as a condition is true.
They help avoid writing the same code multiple tumes.

*/

// There are 2 types of loops
// 1. Basic loops
// 2. Advance loops
// Basic loops ==> for loops, while loop, do while loop



// 3 types of loops in js are as follows

// 1. For 
// 2. while 
// 3. do while

// for loop
// Runs a block of code a specific nu,ber of times.  


// syntax for  ..for loop
//        1           2           4
// for(initialize,condition,increment)
// {     3   
// code to repeat
//}

// 1. initialize ==> where to start 
// 2 .condition checks always for true to execute code block 
// 3. code block (what to repaeat )
// 4. increment the number



for (let i = 1; i <= 10; i++) {
   console.log(i);
}


// while
let x = 1;
while (x <= 100) {
    console.log(x);
    x++;
}

// do while (atleast one print irrespective of condition)
let a = 100
do {
    console.log(a);
    a++;
} while (a <= 10);

// for in
let object = {
    name: "abdulah",
    age: "19",
    batch: "cf25"
}
for (const key in object) {
    console.log(object);
}

// for of

for (const c of "Abdullah") {
    console.log(c);
}



for (let i = 5; i <= 10 ; i++) {
  
    console.log("Hello", i);
}