// throw in js

/*
throw is used to manually create (throw) an error in your code 

you can think of it like saying:
"if something goes wrong here, stop everything and jump to the catch block "
*/



try {
    let age = 15;
    if (age < 18){
        throw "you must be 18 older";// alternative of console log
    }
    else{
        throw "i cant vote"
        // console.log("welcome");
    }
} catch (error){
    console.log('my Error', error);
}

