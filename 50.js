

// map is faster than for each 
// map is the fastest element

console.time("Start");
let num = [1,2,3,4,5]

let numbers = [1,2,3,4,5,6,7,8,9,10]
console.log(numbers);//12345
let final = numbers.map((x)=> x);
console.log(final);// 246810

console.timeEnd("Start");


console.time("Start");
let num1 = [1,2,3,4,5,6,7,8,9,10];
num1.forEach((ele)=>{
    console.log(ele);
})
console.log(num1);

console.timeEnd("Start");



console.time("Start");



function table (n){
    for (i = 1; i<=10;i++){
        console.log(`${n} X ${i} = ${n*i}`);

    }
}

// for each

const number = [1,2,3,4,5,6,7,8,9,10] 

number.forEach((n)=> {
    console.log(` 5 X ${n} = ${5*n}`);
})

// map Method

const nums = [1,2,3,4,5,6,7,8,9,10]

const table1 = nums.map((n)=> {
    return `5 X ${n} = ${5*n}`
})

console.log(table1);




table(100)
console.timeEnd("Start");