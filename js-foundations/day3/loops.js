/* Task 1 — Filter Even Numbers (Without using filter()) */

const nums = [11, 20, 3, 42, 55, 60];
const filteredNums = [];

for (const num of nums) {
  if (num % 2 == 0) {
    filteredNums.push(num);
  }
}

console.log(filteredNums);

/* Task 2 — Reverse a string using a loop */

let str = "backend";
let reversedStr = "";

let j = str.length - 1;
for (let i = str.length - 1; i >= 0; i--) {
  reversedStr = reversedStr + str.charAt(i);
}

console.log(reversedStr);

/* Task 3 — Count how many true values in an array */

const flags = [true, false, true, true, false, false, true];
let count = 0;

for (const flag of flags) {
  if (flag === true) {
    count++;
  }
}

console.log(count);

/* Task 4 — Return object keys whose values are > 50 */

const scores = {
  math: 91,
  english: 45,
  science: 67,
  history: 30,
};

let higherScores = [];

for (const score in scores) {
  console.log(scores[score]);
  if (scores[score] > 50) {
    higherScores.push(score);
  }
}

console.log(higherScores);

/* Task 5 — Stop on first negative number */

let data = [4, 7, 12, -1, 9, 10];
let beforeNegative = [];

for (const num of data) {
  if (num < 0) {
    break;
  }
  beforeNegative.push(num);
}

console.log(beforeNegative);
