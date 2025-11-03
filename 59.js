// reduce () arrays method
/*
The reduce method runs a function on each element of an array to reduce it to a single value(like sum, product, or combined result).



*/


// reduce method has 3 parameters 
// 1. accumulator step => stores the previous step
//2 . currentValue ==> current array element
//3. initialValue ==> starting value

let numbers = [10,20,30,40,50]

let total = numbers.reduce((acc,cur)=> {
    return acc + cur;
}, 0)

console.log(total);

let numbers1 = [10,20,30,40,50]

let total1 = numbers1.reduce((acc,cur)=> {
    return acc * cur;
}, 1)

console.log(total1);


let numberss = ["h","e","l","l","o"]

let totals = numberss.reduce((acc,cur)=> {
    return acc + cur;
}, )

console.log(totals);


let numbersss = ["h","e","l","l","o"]

let totalss = numberss.reduceRight((acc,cur)=> {
    return acc + cur;
}, )

console.log(totalss);