function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mult(a, b) {
  return a * b;
}

function div(a, b) {
  return a / b;
}

function remainder(a, b) {
  return a % b;
}

function power(a, b) {
  return a ** b;
}

let operators = {
  "+": add,
  "-": sub,
  "*": mult,
  "/": div,
  "%": remainder,
  "**": power,
  default: () => "Invalid operator",
};

function calculate(a, b, op) {
  return (operators[op] || operators["default"])(a, b);
}

console.log(calculate(5, 2, "+"));
console.log(calculate(5, 2, "-"));
console.log(calculate(5, 2, "*"));
console.log(calculate(5, 2, "/"));
console.log(calculate(5, 2, "%"));
console.log(calculate(5, 2, "**"));
