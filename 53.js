// Factorial in js

// 5 X 4 X 3 X 2 x 1

// let result = 1
// for (let i=5 ; i>0; i--){
//     result*=i ; 
// console.log(result);
//}

// normal

function fac(n){
    let finalOutput = 1;
    for (let i = n; i>0;i--){
        finalOutput *= i;
    }
    return finalOutput;
}

let answer = fac(5);
console.log(answer);



// with recursion

function factorial(a){
    if(a == 0) return 1;
    return a * factorial(a-1)
}
let output = factorial(6);
console.log(output);


