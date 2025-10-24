// do while loop

// syntax

let i = 6
do{
    console.log(i);
    i++;
}while(i<=5)
// even if your condition is false it will execute one time
// Runs the code atleast once, then checks the condition


// Table using for

for (let a = 1; a<=100 ;a++) {
    console.log(`100 X ${a} = ${a*100}`);
}

// table using while
let a = 1;
while (a<=100) {
    console.log(`100 X ${a} = ${a*100}`);
    a++;
}

// table using do while

let a1 = 1;
do {
    console.log(`100 X ${a1} = ${a1*100}`);
    a1++;
} while (a<=100);
