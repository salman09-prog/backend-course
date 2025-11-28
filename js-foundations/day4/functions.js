/* Task 1 — Custom map() (HOF)

Build your own version of map() called myMap */

let arr = [1, 2, 3];

function myMap(arr, fn) {
  const result = [];
  for (const el of arr) {
    result.push(fn(el));
  }
  return result;
}

const output = myMap(arr, function (num) {
  return num * 3;
});

console.log(output); // [3, 6, 9]


/* Task 2 — secureCounter (Closure)

Write a function that returns another function that increments a private counter, but the counter cannot be accessed directly. */

function secureCounter() {
  let count = 0;
  return function () {
    count++;
    return count;
  };
}

const c = secureCounter();
console.log(c()); // 1
console.log(c()); // 2


/* Task 3 — Convert any function into an arrow function (proper implicit return)

Convert: */

const multiply = (a, b) => a * b;

console.log(multiply(2, 2));

/*  Task 4 — Create a function that logs THIS correctly

Write an object with a method that prints its own name using correct this usage (regular function, not arrow). */

const username = {
  name: "Salman",
  printName: function () {
    console.log(this.name);
  }
};

username.printName(); // Salman

/*  Task 5 — HOF returning functions

Write a function createMultiplier(n) that returns another function which multiplies any number by n. */

function createMultiplier(a) {
  return function mult(b) {
    return a * b;
  };
}

const double = createMultiplier(2)
console.log(double(4))

