// switch case in js
// A switch statement is used to compare one value against multiple possible cases. 
// it's often cleaner than writing multiple if...else...if conditions

/*
syntax

switch (expression){
    case value1;
        // code block if epression === value1
    break;


    case value2:
            // code block if expression === value2
        break;

    default;
        // code block if no case matches

*/

let day = "sunday";

switch(day){
    case "sunday":
        console.log("its a sunday");
        break;
    case "monday":
        console.log("its monday");
        break;
    case "Tuesday":
        console.log("Tuesday");
        break;
    case "Saturday":
        console.log("saturday");
        break;
    default:
        console.log("please add correct day");
        break;
}


let days = "sundays"

if (days == "sundays") {
    console.log("its sundays ");
} else if (days == "tuesday") {
    console.log("its tuesday");
} else if (days == "wednesday") {
    console.log("its wednesday");
} //else {
    //console.log("please add correct day");
//}





