// Task 1 — HARD COPY
// Make a hard copy of this array:

const nums = [1, 2, 3];
const hardCopy = nums.slice(0, 3);
console.log(hardCopy);

// Task 2 — REMOVE last item of array
// Remove the last item of:

let arr = ["a", "b", "c", "d"];
let lastItem = arr.pop();
console.log(lastItem);

// Task 3 — Check empty array
// Write an if condition that prints "empty" if array is empty, else "not empty".

let newArr = [];

if (newArr.length == 0) {
  console.log("Array is empty");
} else {
  console.log("Array not is empty");
}


// Task 4 — Check username uniqueness
// Given:

const u1 = "salman09";
const u2 = "salman09";

if(u1 === u2){
    console.log("usernames are same");
} else {
    console.log("OK");
}


// Task 5 — Merging
// Merge these two arrays properly:

let a = ["tokyo", "rome"];
let b = ["delhi", "paris"];

let c = [...a, ...b]
console.log(c);
