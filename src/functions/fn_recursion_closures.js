/**-----------------------------------------------------------------------
 * ? Function called recursive function if it calls itself inside its body.
 * ? A recursive function always has a condition to stop calling itself. Otherwise, it will call itself indefinitely.
*/

/** Example 1 : */
function countDown(fromNumber) {
  console.log('fromNumber = ', fromNumber);

  const nextNumber = fromNumber - 1;

  if (nextNumber > 0) {
    console.log('inside if');
    countDown(nextNumber);
  }
}
countDown(3);

/** Example 2 : */
function loop(x) {
  if (x >= 10) {
    return;
  }
  loop(x + 1);
}
loop(0);

/**-----------------------------------------------------------------------
 * ? You may nest a function within another function. The nested (inner) function is private to its containing (outer) function.
 * ? The inner function forms a closure: the inner function can use the arguments and variables of the outer function, while the outer function cannot use the arguments and variables of the inner function.
*/

/** Example 1 : */
function addSquares(a, b) {
  function square(x) {
    return x * x;
  }
  return square(a) + square(b);
}
const a = addSquares(2, 3);
const b = addSquares(3, 4);
console.log('aaa = ', a);
console.log('bbb = ', b);

/** Example 2 : */
function outside(x) {
  function inside(y) {
    return x + y;
  }
  return inside;
}
const fnInside = outside(3);
const result = fnInside(5);
const result1 = outside(3)(5);
console.log('result = ', result);
console.log('result1 = ', result1);
