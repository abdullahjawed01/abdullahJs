// Redeclare Vs Reassign
// Redeclaring a variable means declaring it again in the same scope, which is not allowed in strict mode.
// Reassigning a variable means changing its value without redeclaring it.


//Redeclare means using var let const 2 times
// while updating 
// Redeclare works in only var


// Reassing means without using var let const
// While updating
// Reassign works in var let const

// Redeclare
var x = "Abdullah";
var x = "Jawed"; // Allowed in var, not allowed in let/const

let y = 30;
y = 40; // Allowed, this is reassignment


const z = 50;
// const z = 60; // Not allowed, const cannot be redeclared or reassigned

console.log(x); // 20
console.log(y); // 40
console.log(z); // 50
