// Function keyword returns a reference to the newly created function
console.log(function fn() {});

// It can be assigned to a variable
const helloWorld = function () {
  return "Hello world";
};

// The variable now holds a reference, that can be executed
console.log(helloWorld);
console.log(helloWorld());

// Parameters are supported too
const greet = function (who) {
  console.log("Hello, " + who);
};
greet("Tom");
greet("Frank");

const numbers = [0, 1, 2, 3];

const add = function (numbers) {
  let total = 0;
  for (const num of numbers) {
    total += num;
  }
  return total;
};

const multiply = function (numbers) {
  let total = 0;
  for (const num of numbers) {
    total *= num;
  }
  return total;
};

console.log(add(numbers));
console.log(multiply(numbers));

// Functions can be passed as parameters to other functions
function doMathStuff(fn, arrayOfNumbers) {
  // We call the passed function with the provided array of numbers
  return fn(numbers, arrayOfNumbers);
}

console.log(doMathStuff(add, [0, 1, 2, 3]));
console.log(doMathStuff(multiply, [0, 1, 2, 3]));

// Docs: https://developer.mozilla.org/en-US/docs/Glossary/First-class_Function
