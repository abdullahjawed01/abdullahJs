// try...catch...finally

// its a way to handle errors in js
// so uyour program doesnt crash

//syntax

try{
   //Code that might cuase an error
} catch (error){
            // code that runs if an error happens
} finally {
    // code that always runs (error or not )
    }


try {
    let output = 10/0;
    console.log(output);// infinity
    console.log(output +a);
} catch  (error){
    console.log("error");
    console.log(error.name, error.message);
} finally{
    console.log("hello i ll be there");// even if errors is there finally will print 
}