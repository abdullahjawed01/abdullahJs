// promises in js



/*
A promise is an object that repreasents the evenetual comepletion or failure of an asynchronous operation


"I'll fetch the data (pending)... if it works, i'll resolve it , if it falls, i,ll reject it


*/

// const promise = new Promise((resolve,reject)=>{
//     let success = true;
//     if(success){
//         resolve("Task completed");

//     } else {
//         reject ("Task Failed")
//     }
// })
// console.log(promise);




function timerCallback(callback,seconds){
    console.log(`waiting for ${seconds} seconds.... `);
    setTimeout(()=>{
        callback(`done after ${seconds} seconds`)

    },seconds * 1000)
}

timerCallback((msg)=>{
    console.log(msg);
},2)