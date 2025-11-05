// synchronous vs Async

/**
In synchronous code, each line runs one after another, waititng for the previous one to finish before moving on 

 */

// JS waits for each line to complete before running the nexxt one.

// These run  immediately, line-by-line, and block the next task until they finish.

console.log("step one");
console.log("step two");
console.log("step three");


// Type                       | Example                                                          |
// Normal code execution      | console.log() , vairiable declarations                           |
// Match operations           | let sum = a+b;                                                   |
// Loops                      | for, while, do....while                                          |
// conditional statement      | if , else , switch                                               |
// Function calls (normal)    | function myFunc() {} -> myFunc();                                |
// JSON parsing               | JSON.parse(', JSON.stringify()                                   |
// DOM manipulation (usually) | document.getElementById(), 'element.innerHTML - "...."           |
// Error handling             | try{...} catch{err} {...}                                        |
// Blocking alerts            | alert(), prompt(), "confirm()"                                   |

// These executes in order and block the call stack until done.




// Asynchronous (non-blocking)
// These are delegated to the browser or node.ks APIs and run in the backgroung, allowing JS to move on.

// Type                       | Example                                                          |
// Timers                     | setTimeout() setInterval()                                       |
// Promises                   | promise.resolve(),Promise.reject(), .then() , .cathc()           |
// Async function             | async function getData() {await fecth(...)}                      |
// Fetch APIs                 | fetch("https://aoi.example.com")                                 |
// Network request            | XMLHttprequest, axios.get()                                      |
// File system (node.js)      | fs.readFiles(), fd.writeFile()(async version)                    |
// Database queries           | MongoDB.MySQl queries , etc                                      |
// Event listenerts           | button.addEvemtListener("clicl",...)                             |
// Animation frames           | requestAnimationFrame()                                          |
// Web workers                | Background threats for heavy computation                         |

// These are handled by the Event Loop, Web APIs, and CallBack Queue --- They dont block other code

