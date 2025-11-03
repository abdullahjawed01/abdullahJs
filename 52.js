/* Recursion is when a function calls itself to solve a smaller version of the same problem - until it reaches a base case (a stopping point).*/

// function hello(){
//     console.log("hello CFI");
//     hello()
// }

// hello()

// 8 line hello()
// 3rd function hello
// 4 hello cfi
// repeat infite loop it is 



function call(num){
    console.log("num value", num);//10
    if(num==1) return console.log("stopped");   

    console.log("calling the function");
    call(num-1)
}

call(10)


// recurison 