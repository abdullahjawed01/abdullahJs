//loops
// while and for loops in js



let counter = 1;
let sum = 0;
while (counter <=100){
    if(counter %2 == 0){
        sum = sum + counter;
    }
    counter ++;
}
console.log(sum)


let counter1 = 1;
while (counter1 <= 10){
    counter1 ++;
}
console.log(counter1);

let counter2 = 1;
do {
    console.log('Abdullah');
    counter2++;
} while (counter2 <= 10);



var a = [10,20,30,40];
a.push(50);
console.log(a);

a.pop(20);
console.log(a);
a.shift();
console.log(a);
a.unshift(5);
console.log(a);
a.splice(10,30,20);
console.log(a);


