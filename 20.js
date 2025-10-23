//Explicit conversion

// 1. using Number() Method

let a = Number("3")
console.log(a);
a = Number(true);
console.log(a);
a = Number("")
console.log(a);// 0 falsy value
a =Number("hello")
console.log(a);// NaN


//2. String Method

let b
b = String(234)
console.log(b);
b = String(true)
console.log(b);
b = String(null)
console.log(b);
b = String(undefined)
console.log(b);


//3 . Boolean 
// True 
// False

let c
c = Boolean(undefined)
console.log(c);// False
c = Boolean(232)
console.log(c);//true
c = Boolean("Hello")
console.log(c);// true
c = Boolean(null)
console.log(c);// false


