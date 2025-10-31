// 11. .includes() Methods
// it gives true and false basis of present in array or not
// true = exist
// false = not exist
// output in boolean value

let arr = ["saboor","rayyan","kaif"]

console.log(arr.includes("kaif"));

// 12. join() method;
// combines every element in one string and add given elements instead of comma
// replace comma

let arr1 = ["saboor","rayyan","kaif"]
console.log(arr1.join("|"));




// 13. reverse() method

let arr2 = ["saboor","rayyan","kaif"]
console.log(arr.reverse());

let array = [1,2,3,4,5,6,7,8,9,10]
console.log(array.reverse());

let array1 = [342,32423,324324,5434]
console.log(array1.reverse());




// 14. sort() method

let arr3 = [10,9,8,7,6,5,4,3,2,1]
console.log(arr3.sort());

let arr4 = [10,324,32423,5555546,8,3454,353463,6345346]
console.log(arr4.sort((a,b)=> a-b));
// a - b for ascending
// b - a for descending






//function
// (()=>{
//  console.log("testing");
// })
// ();

// IIFE // immedietly invoke function expressions very  improotnant



// 15. flat() method
// converts  nested array into single dimensional array
 let arr5 = ["hello", "hi",["bye","test"],"ok"]
 console.log(arr5);
 console.log(arr5.flat());



// 16. Array.of() method

// A method is used to create new array
// can be used as user input converted into array
// makin array without using square bracket
let output = Array.of("this","hi",12,223,344,false)
console.log(output);


// home work 
// every () method
// find() method
// findIndex() method
// forEach() method
// map() method
// reduce() method
// reduceRight() method

