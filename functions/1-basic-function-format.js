// 1. Basic function definition
function greet(name) {
  return `Hello, ${name}`
}

console.log(greet("Alice"))

function add(a, b) {
  return a + b
}

// 2. Function expression
const mul = function (a, b) {
  return a * b
}

let result = mul (3, 4)

// 3. Arrow function
const div = (a, b) => a / b