/**
 * Part 1: Creating Variables and Constants
 * In this file you should define the following variables with the exact names
 *
 * 1. fullName      -> assign it a value of your full name
 * 2. yearOfBirth   -> assign it a value of your year of birth
 * 3. hobby         -> assign it a value of your favorite hobby
 * 4. funFact       -> assign it a value of some fun fact about yourself
 * 5. image         -> assign it a value of a url of your image or ant image that represents you online
 */

// Part 1 answer 👇🏻 ...
const username="Hawraa AL-Mahdi";
const birth="10/12/1997";
const hobby="diving";
const funFact="I LOVE CODDED";
const image ="https://i.pinimg.com/550x/8d/52/c5/8d52c5c35382908832ffedb21c1e63b0.jpg"

console.log( `my name is ${username}`);
console.log(`I am ${birth}`);
console.log(`my hobby is ${hobby}`);


/**
 * Part 2: String Interpolation
 * Create the following new variables that interpolate
 * the variables defined above into strings.
 *
 * 1. fullNameString      -> assign it to: My name is {fullName}
 * 2. yearOfBirthString   -> assign it to: I am {YOUR_AGE}, and make sure you calculate your age from your year of birth
 * 3. hobbyString         -> assign it to: My hobby is {YOUR_HOBBY}
 * 
 * Uncomment the following lines and start interpolating.
 * You can uncomment a line by removing the // at the start
 */

// const fullNameString = `My name is ${}`;
// const yearOfBirthString =
const fullNameString =`my name is ${username}`;
const yearOfBirthString = `I am ${2024 - birth}`;
const hobbyString =`my hobby is ${hobby}`;



/**
 * Part 3: Re-assignment
 * Increment your hacker score
 * */

let stars = 0;

function incrementBy1() {
  // Increment stars by 1 👇🏻
  stars = stars + 1;
}
function decrementBy1() {
  // decrement stars by 1 👇🏻
  stars = stars - 1;
}

function incrementBy2() {
  // Increment stars by 2 👇🏻
  stars = stars +2;
}
function decrementBy2() {
  // decrement stars by 2 👇🏻
  stars = stars - 2;
}

