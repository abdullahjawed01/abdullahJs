// Slice method in array

// The Slice() method is used to copy or extract a portion of an array(or string) without cahnging the original one 


let arr = [10,20,30,40]
//  i      0  1  2  3
//  len    1  2  3  4



let output = arr.slice(1,3)
console.log(output);//[20,30]



// slice can also be used in string 

let str = " hello"
let out = str.slice(1,3)
console.log(out);








// some() method ......................
/* 
 The some( ) metod checks if at least one element in an array passes a test(condition).
 it returns:

true -> if any element passes the condition

false -> if non do

*/

/// if even one condition is true its true but in every ,, every element should be true



let arr1 = [2,4,6,8,11]
let output1 = arr1.every((x)=> x % 2 == 0)// false
let output2 = arr1.some((x)=> x % 2 == 0)// true
console.log(output1);
console.log(output2);






