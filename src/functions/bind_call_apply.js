/**
 * ?
 * ? With the bind() method, an object can borrow a method from another object.;
*/

/** Example 1: */
const person = {
  firstName: 'John',
  lastName: 'Doe',
  fullName() {
    return `${this.firstName} ${this.lastName}`;
  },
};
const newMember = {
  firstName: 'Anahit',
  lastName: 'Sultanova',
};

const fullNameOfPerson = person.fullName();
console.log(fullNameOfPerson);

const fullNameOfMember1 = newMember.fullName();
const fullNameOfMember2 = person.fullName.bind(newMember);
console.log('first = ', fullNameOfMember1()); // Error : is not a function
console.log('second = ', fullNameOfMember2()); // OK
