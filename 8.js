// function scope    var  let   const
// inside function     yes  yes   yes
// outside function    no  no    no

function testScope(){ // function declaration
    var x = 10;
    let y = 20;
    const z = 30;
    console.log(x); // 10
    console.log(y); // 20
    console.log(z); // 30
}
testScope();// calling function

console.log(x); // error
console.log(y); // error
console.log(z); // error

