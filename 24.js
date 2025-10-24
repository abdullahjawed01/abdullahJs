// loops in js

// 3 types of loops in js are as follows

// 1. For 
// 2. while 
// 3. do while

// for loop
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