// single line comment
/*  multi 
line
 comment

*/
// scoping in java script
let a = 10; // global scope





/*
block scope          var    Let   const
inside of block      yes    yes    yes
outside of block     yes    no     no


*/

{
    let b = 20; 
    
}
console.log(b);// error

{
    var c = 30; 
}
console.log(c); // no error

{
    const d = 40;   
}

console.log(d); // error