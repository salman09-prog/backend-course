/* Task 1 — Custom map() (HOF)

Build your own version of map() called myMap */

let arr = [1, 2, 3];

function myMap(arr, fn) {
  return fn(arr);
}

myMap(arr, function (num) {
  for (const el of arr) {
    return el * 3;
  }
});

/* Task 2 — secureCounter (Closure)

Write a function that returns another function that increments a private counter, but the counter cannot be accessed directly. */

function secureCounter() {
  let count = 0;
  return function increaseCount() {
    count++;
    console.log(count);
  };
}

c = secureCounter();
c();

/* Task 3 — Convert any function into an arrow function (proper implicit return)

Convert: */

const multiply = (a, b) => a * b;

console.log(multiply(2, 2));

/*  Task 4 — Create a function that logs THIS correctly

Write an object with a method that prints its own name using correct this usage (regular function, not arrow). */

const username = {
  printName: function (name) {
    console.log(name);
  },
};

username.printName("Salman");

/*  Task 5 — HOF returning functions

Write a function createMultiplier(n) that returns another function which multiplies any number by n. */

function createMultiplier(a) {
  return function mult(b) {
    return a * b;
  };
}

const double = createMultiplier(2)
console.log(double(4))

