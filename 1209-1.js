/** ASSIGNMENT */

/** NUMBER */
// 1. Calculate your age in seconds
let age = 18 * 365 * 24 * 60 * 60;
console.log(age);

console.log("hi");

/** STRING */
// 2. Format this string (Hint: use `split`)
let messyString = "dO yOu kNOw wHat i mEAn?";
let messyArray = messyString.split(" ");
messyArray;
//Fast Method : for loops

//Slow Method: messyArray
let d = messyArray[0].toLowerCase()[0];
d = d.toUpperCase();
d;
let rest = messyArray[0].toLowerCase().slice(1);
console.log(d + rest);

messyArray;

// 3. Get the second character of each string (Hint: use index)
let string1 = "tYpe";
let string2 = "Some";
let string3 = "Numbers";
let string4 = "?!";

console.log(string1[1]);
console.log(string2[1]);
console.log(string3[1]);
console.log(string4[1]);

let output = string1[1] + string2[1] + string3[1] + string4[1];
output;

// 4. Create an echo effect. Eg. "PREFACE... Preface... preface... "
function echo(string) {
  let firstPart = string.toUpperCase() + "...";

  let secondPart = capitalize(string) + "...";

  let thirdPart = string.toLowerCase() + "...";

  // TODO
  console.log(firstPart + secondPart + thirdPart);
}

function functionName(argument1, argument2, argument3) {
  //how to create a function
  //do something to our arguments

  return output;
}

const arrowFunction = (argument1, argument2) => {
  //how you create an arrowFunction
  return output;
};

function capitalize(word) {
  let capitalizedWord = word[0].toUpperCase();
  let rest = word.toLowerCase().slice(1);
  let output = capitalizedWord + rest;

  return output;
}

console.log(capitalize("something"));

// DO NOT EDIT this line
echo("preface"); // should console.log "PREFACE... Preface... preface... "

// 5. Find if stringA is a substring of stringB. For example, "can" is a substring of "candle" (Hint: consider case and look at `includes` string method)
function isSubstring(stringA, stringB) {
  // TODO

  //"candle".includes("can")
  let a = stringA.toLowerCase();
  let b = stringB.toLowerCase();

  if (a.length > b.length) {
    //true block
    return a.includes(b);
  } else {
    //false block
    return b.includes(a);
  }
}

// DO NOT EDIT this line
console.log(isSubstring("can", "candle")); // should return true
console.log(isSubstring("can", "handle")); // should return false

// 6. (HARD) Find the missing letter in the passed letter range and return it. If all letters are present, return undefined (Hint: upper bound is start of the string, lower bound is end of the string.)
function missingLetters(string) {
  // TODO
  return;
}

missingLetters("abce"); // "d"
missingLetters("abcdefghjklmno"); // "i"
missingLetters("abcdefghijklmnopqrstuvwxyz"); // undefined

// 7. (HARD) Format dates to this format "1/1/2022" (Hint: use an object, use `split`)
let testDate1 = "Jan 1, 2022";
let testDate2 = "Jan 01, 2022";
let testDate3 = "January 1, 2022";
let testDate4 = "January 01, 2022";

/** ARRAY */
// 8. Choose a random response from this array of phrases. (Hint: Look at `length`, `Math.floor` and `Math.random`)
let phrases = [
  "Sure thing",
  "That sounds good",
  "Yes definitly",
  "Maybe not today",
  "Computer says no",
];

// 9. Fill in the missing numbers for this array. Expect to get back [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
let numbers = [0, 2, 3, 5, 7, 9];
function range(start, stop) {
  let arr = [];
  for (let i = start; i < stop; i++) {
    arr.push(i);
  }
  return arr;
}

//something

//FOR LOOPS

let arr = [1, 2, 3]; //it can be numbers or a string
// for (where do we start, when should we keep going, how many steps to take)
for (let i = 0; i < arr.length; i++) console.log(arr[i]);
//for i in arr:
for (let i of arr) {
  console.log(i);
  console.log(typeof i);
}

/** OBJECT */
let menu = {};
// 10. How do you check if the menu is empty? (Hint: `Object.keys` or `Object.values`)
menu = {
  drink: "beer",
  pay: (amount) => {
    console.log(`You better pay up :${amount}`);
  },
};

// 11. Fill in the menu with appetizer, main, desert, drink. Think what should the values should be. (Hint: It should have prices per item)
menu = {
    appetizer :"Tomato Soup",
    pay: (amount)="$100",
    main:"Fried Rice",
    desert:"Chocolate Ice Cream",
    drink: "Apple Juice"


}


// 12. Create an order from the menu. Calculate your total.
let myOrder;
let iOwe;


// 13. Un-order something from your order.

// 14. Restaurant has a promotion. Change the prices of some items on the menu. Check if your order's total has changed.

// 15. Find the total number of food on the menu (appetizer + main + desert + drink)

const add = (x, y) => x + y; //same thing as { return x + y}
eight = add(3, 5);
eight;
