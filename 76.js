// Asynchronous (timer functions)

/*
Timer functions let you schedule code executions -either after a delay or repeatedly at intervals. 
They are part of the web APIs (in browsers) or node.js global timers (in backend JS).

*/


// 1. setTimeout()

// console.log("Step 1");

// setTimeout(()=>{
//     console.log("step2");
// },5000)//1,3,2

// // or 


// setTimeout(()=> console.log("step2") ,0)// 1,3,2


// console.log("Step 3");




// 2. setInterval()\
/*
The setInetval() method reoeatedly calls a function or executes a code snippet, within a fixed time delay between each call.

It continues running until you stop it using clearInterval().

*/

// setInterval(()=>{
//     console.log("Hello CFI");
// },2000)

// clearInterval


// let count = 1

// const timer = setInterval(()=>{
//     console.log("Hello CFi");
//     console.log(count);
//     count ++;
    

//     if (count == 5){
    
//         console.log("stopped");
//         clearInterval(timer);
//     }
// },1000)


// function repeat(){
//     console.log("hello CFI");
//     setInterval(repeat,2000)
 
// }
// repeat()




//3)  callback function
/*
A callback function is a function passes as an argument to another function
and is called ("called back") later inside that function

*/

function greet(a,b){
    console.log("hello",a);
    b()
}
function afterGreeting(){
    console.log("welcome to code.live");
}


greet("suhahil",afterGreeting)