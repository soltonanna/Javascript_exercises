/**
 * ! A function is a block of code that performs a specific task.
 * ! There are 3 main types of creating functions : declaration, expression and arrow.
 * ! Functions must be in scope when they are called, but the function declaration can be hoisted (appear below the call in the code).
 * ! Variables defined inside a function cannot be accessed from anywhere outside the function, because the variable is defined only in the scope of the function. However, a function can access all variables and functions defined inside the scope in which it is defined.
*/

/** ---------------------------------------------------------------------------
 * ? A function definition (also called a function declaration, or function statement) consists of the "function" keyword
*/

function square(number) {
  return number * number;
}
console.log(' square == ', square(5));

/**---------------------------------------------------------------------------
 * ? A function expression is called using the variable name. This type of functions also called anonymous functions.
 * ? Function expressions are convenient when passing a function as an argument to another function.
*/

function map(f, a) {
  const result = new Array(a.length);
  for (let i = 0; i < a.length; i++) {
    result[i] = f(a[i]);
  }
  return result;
}

const f = function (x) {
  return x * x * x;
};

const numbers = [0, 1, 2, 5, 10];
const cube = map(f, numbers);
console.log('cube == ', cube);

/**---------------------------------------------------------------------------
 * ? An arrow function expression has a shorter syntax compared to function expressions and does not have its own "this", "arguments", "super", or "new.target". Arrow functions are always anonymous.
*/

const array = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium',
];
const array2 = array.map((s) => s.length);

console.log(array2);
