// simple function

function age(){
    console.log(18);
}
age()

// function with parameters

function add(a,b){
    console.log(a+b);
}
add(40,50)


// function with return

function multiple(a,b){
    return a*b
}
let x = multiple(10,10)
console.log(x);

//function with expression

let mul = function(a,b) {
    return a*b
}

let final = mul("20","20")
console.log(final);


// function with arrows

let division = (a,b)=>{
    return a/b
}

let divide = division("100","10")
console.log(divide);