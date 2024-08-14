const fruits = ['apple', 'banana', 'orange', 'lemon'];

const vegetables = [];
vegetables[0] = 'tomato';
vegetables[1] = 'potato';
vegetables[2] = 'cucumber';
vegetables[3] = 'corn';
vegetables[4] = 'garlic';

const cars = [];
cars[0] = 'Jeep';
cars[1] = 'Toyota';
cars[2] = 'BMW';
cars[3] = 'Ford';
cars[4] = 'Honda';

const ages = [12, 7, 54, 83, 11, 48, 66, 52, 12, 30, 78, 20, 5, 10, 2, 1];
const childrenAges = [5, 8, 12, 10, 7];

const name = 'Anahit';
// console.log(fruits, vegetables, cars, ages, childrenAges);

/*
!   FOREACH
        * calls a function for each element in an array;
*/

console.log('____________ FOREACH ____________');
cars.forEach((car) => console.log(car));

/*
!   MAP
        * creates a new array from calling a function for every array element;
        * calls a function once for each element in an array;
!   FILTER
        * creates a new array filled with elements that pass a test provided by a function;
!   REDUCE
        * returns a single value: the function's accumulated result;
        * does not change the original array;
!   SORT
        * sorts the elements of an array;
        * overwrites the original array;
        * sorts the elements as strings in alphabetical and ascending order;
!   REVERSE
        * reverses the order of the elements in an array;
        * overwrites the original array;
*/

console.log('____________ MAP ____________');
const doubleAge = ages.map((age) => age * 2);
console.log({ doubleAge });

console.log('____________ FILTER ____________');
const canDrink = ages.filter((age) => age > 21);
console.log({ canDrink });

console.log('____________ REDUCE ____________');
const sumAges = ages.reduce((acc, value) => acc + value, 0);
console.log({ sumAges });

console.log('____________ SORT ____________');
const minToMaxAges = ages.sort((a, b) => a - b);
console.log({ minToMaxAges });
const maxToMinAges = ages.sort((a, b) => b - a);
console.log({ maxToMinAges });

console.log('____________ REVERSE ____________');
console.log('before changing => ', ages);
ages.reverse();
console.log('after changing => ', ages);

/* ---->
!   PUSH
        * adds new items to the end of an array;
        * changes the length of the array;
        * returns the new length;
!   POP
        * removes (pops) the last element of an array;
        * changes the original array;
        * returns the removed element;
!   UNSHIFT
        * adds new elements to the beginning of an array;
        * overwrites the original array;
!   SHIFT
        * removes the first item of an array;
        * changes the original array;
        * returns the shifted element;
*/

console.log('____________ PUSH ____________');
console.log('before changing => ', vegetables);
vegetables.push('pumpkin');
console.log('after changing => ', vegetables);

console.log('____________ POP ____________');
console.log('before changing => ', vegetables);
vegetables.pop();
console.log('after changing => ', vegetables);

console.log('____________ UNSHIFT ____________');
console.log('before changing => ', vegetables);
vegetables.unshift('pumpkin');
console.log('after changing => ', vegetables);

console.log('____________ SHIFT ____________');
console.log('before changing => ', vegetables);
vegetables.shift();
console.log('after changing => ', vegetables);

/*
!   SLICE
        * returns selected elements in an array, as a new array;
        * selects from a given start, up to a (not inclusive) given end;
!   SPLICE
        * adds and/or removes array elements;
        * overwrites the original array.
*/
console.log('____________ SLICE ____________');
console.log({ fruits });
const citrus = fruits.slice(2, 4);
console.log({ citrus });

console.log('____________ SPLICE ____________');
console.log('before changing => ', fruits);
fruits.splice(2, 2);
fruits.splice(2, 0, 'orange', 'lemon', 'kivi', 'mango');
console.log('after changing => ', fruits);

/*
!   SOME
        * checks if any array elements pass a test (provided as a function);
        * does not change the original array;
!   EVERY
        * returns true if the function returns true for all elements;
        * returns false if the function returns false for one element;
        * does not change the original array
*/
console.log('____________ SOME ____________');
const canDrive = ages.some((age) => age > 18); // check also with 'childrenAges' array
console.log({ canDrive });

console.log('____________ EVERY ____________');
const isChildren = ages.every((age) => age < 18); // check also with 'childrenAges' array
console.log({ isChildren });

/*
!   INDEXOF
        * returns the first index (position) of a specified value;
        * returns -1 if the value is not found;
!   VALUEOF
        * returns the array itself;
        * does not change the original array;
!   INCLUDES
        * returns true or flase if an array contains or not contains a specified value;
!   ENTIRES
        * returns an Array Iterator object with key/value pairs;
*/
console.log('____________ INDEXOF ____________');
const whereIsBanana = fruits.indexOf('banana');
console.log({ whereIsBanana });

console.log('____________ VALUEOF ____________');
const myFruits = fruits.valueOf();
console.log({ myFruits });

console.log('____________ INCLUDES ____________');
const thereIsMango = fruits.includes('mango');
console.log({ thereIsMango });

console.log('____________ INCLUDES ____________');
const getPairs = fruits.entries();
// for (const fruitPair of getPairs) {
//   console.log(fruitPair);
// }

/*
!   ISARRAY
        * returns true if an object is an array, otherwise false;
!   TOSTING
        * returns a string with array values separated by commas;
        * does not change the original array.
*/
console.log('____________ ISARRAY ____________');
const checkArray = Array.isArray(cars); // check also with 'name' string
console.log({ checkArray });

console.log('____________ TOSTING ____________');
const carsList = cars.toString();
console.log({ carsList });

/*
!   JOIN
        * returns an array as a string;
        * does not change the original array;
        * any separator can be specified.
        * ('') => join without space; (' ') => join with spaces;  () => join with comma
!   CONCAT
        * concatenates (joins) two or more arrays;
        * returns a new array, containing the joined arrays;
*/
console.log('____________ JOIN ____________');
const joinCars = cars.join(' and ');
console.log({ joinCars });

console.log('____________ CONCAT ____________');
const mergeArrays = cars.concat(fruits);
console.log({ mergeArrays });
