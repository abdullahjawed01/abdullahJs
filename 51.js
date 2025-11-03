console.time("Start");
function table (n){
    for (i = 1; i<=10000;i++){
        console.log(`${n} X ${i} = ${n*i}`);

    }
}
table(5000)
console.timeEnd("Start");

console.time("Start");
const numbers = Array.from({length:100},(_,i)=> i + 1);
console.log(numbers);
console.timeEnd("Start");


for(let i = 1;i<=3; i++){
    console.log("outer loop", i);

    for (let j = 1; j<=3;j++){
        console.log('       innerloop',j);
    }
}




for (let i = 1;i<=5 ; i++){
    let row = ""
    console.log("here is the first row");
    for (let j = 1;j <= i; j++){
        row += "* ";
        console.log(row,"here is the inner row");

    }
    console.log(row,"final row");
}

