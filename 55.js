// Filter method Array 
/*
The filter() method creates a new array filled with elements that pass a test (a condition you define in a function )

it does not jchange the original array
*/




let arr = [1,2,3,4,5,6,7,8,9,10]


let output = arr.filter((x)=> x>5  )
console.log(output);


let array = [10,20,30,40,50]

let out = array.filter((x)=> x>30)
console.log(out);

// objects in array

let students = [
    {
        fullname: "malik",
        age: 20,
        college: "Drop"
    },
    {
        fullname: "Abdullah",
        age: 30,
        college: "MJ"
    },
    {
        fullname: "kaif",
        age: 40,
        college: "Drop"
    },
    {
        fullname: "Rupjit",
        age: 21,
        college: "Drop",
    }
]

let output1 = students.filter((x) => x.college == "Drop" && x.age <40)
console.log(output1);