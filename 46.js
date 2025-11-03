// array methods
// 19. findIndex()

//Returns the index of the first element that satisifies a condition.
/*

// returns : index number , or -1 if not found.


*/


const num = [2,4,6,8];

let checks = num.findIndex(test);

function test(num){
    return num >= 8;
}

console.log(checks); // 6


