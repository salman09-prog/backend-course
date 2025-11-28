/* Task 1 — Create a file named hello.js that logs the current OS platform.

(Hint: use the built-in Node os module) */

// const os = require('os')
// const currentOS = os.platform()
// console.log(currentOS);

/*  Task 2 — Write a tiny script sum.js that takes 2 numbers from CLI arguments and prints their sum.

Example:
node sum.js 5 7 → 12
 */

const [, , a, b] = process.argv;
console.log(Number(a) + Number(b));


/*  Task 3 — Create a script delay.js that prints "Start", waits 2 seconds, then prints "End".

Use Node’s timer APIs. */

// console.log("Start");

// setTimeout(() => {
//   console.log("End");
// }, 2000);


/* Task 4 — Write a script that reads a file named data.txt and prints its contents.

Use the built-in fs module. */

const fs = require('fs');

const content = fs.readFileSync("data.txt","utf-8");
console.log(content);
