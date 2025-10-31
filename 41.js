// array methods

// total 30 array methods

//// 1. at() method

let arr = ["hi", "hello","bye"]
console.log(arr.at(0));
console.log(arr.at(2));
// index ==> value


// 2. concat() Method

let arr1 = [10,20,30]
let arr2 = [40,50,60]

let total = arr1.concat(arr2)
console.log(total);
//same
console.log(arr1.concat(arr2));


// 3. fill() method

let fruits = ["apple","mago","orange"]
 let total1 = fruits.fill("pineaplle")
console.log(total1);
//fill is an array method which will replace all the elemnts with the given value 



// 4. indexOf() method 

let nums = ["one","two","three","four"]

console.log(nums.indexOf("one"));
console.log(nums.indexOf("two"));

console.log(["one","two"].indexOf("one"));

// its an array msg which takes element and print index of that element
// value ==> index 
// if element dont exist in this it will print -1

// 5. lastindexOf()

let arr3 = [10,20,30,40,50,10,20]
console.log(arr3.lastIndexOf(10));
// output 5
// means you are accessing arrray from last



// 6. length()

let arr4 = [10,20,30,40,50,60]

console.log(arr4.length);
// tell length of the array


// 7. push()
// push is an array method
// which add new element 
// in the last position of the array 

let arr5 = [10,20,30,40];
console.log(arr5.push(50));

   arr5.push(40)
// same    let total3 =  arr5.push(40)
console.log(arr5);



//8. pop  ()
// it is an array method which delete the last elemenet from the array


let arr6 = [10,20,30,40]
arr6.pop()
console.log(arr6);


// 9.  unshift()
// add element from start

let arr7 = [10,20,30,40,]

arr7.unshift(100);
console.log(arr7);

// 10. shift()
// remove element from start

let arr8 = [10,20,30]
arr8.shift()
console.log(arr8);







