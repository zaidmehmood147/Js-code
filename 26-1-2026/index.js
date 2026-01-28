console.log("Hello world");
// function innerFunction() {
//   console.log("khan");
// }
// innerFunction()
// function main(fname,test) {
// //   console.log(fname);
//   test();
// }
// main("ali", innerFunction);

// function calculate(a, b, callback) {
//   return callback(a, b);
// }
// function sum(p, q) {
//   return p + q;
// }
// function subtr(p, q) {
//   return p - q;
// }
// function multi(p, q) {
//   return p * q;
// }
// console.log(calculate(5, 10, multi));
// console.log(calculate(5, 10, subtr));
// console.log(calculate(5, 10, sum));


// start from here 

// Step-by-Step BreakdownThe Source (arr): You start with an array of numbers: [1, 2, 3, 4, 5].
// The Loop: The .map() function "loops" through the array one by one.The Logic: For every item 
// (which the code calls num), it runs the instruction return num + 3.The Result (mapArr): 
// It collects all those new values into a new variable.Visualizing the MathThe computer is 
// essentially doing this behind the scenes:$1 + 3 = 4$$2 + 3 = 5$$3 + 3 = 6$$4 + 3 = 7$$5 + 3 = 8$Console Output:[4, 5, 6, 7, 8]
// Two Things to RememberImmutability: The original arr is still [1, 2, 3, 4, 5]. It hasn't changed. Map creates a copy with changes.The Return is Key: If you forget to write return, your new array will just be a bunch of undefined values.A Modern ShortcutIn modern JavaScript (ES6+), developers usually write this same code in a shorter way using an arrow function:JavaScriptconst mapArr = arr.map(num => num + 3);


// var arr = [1, 2, 3, 4, 5];

// var mapArr = arr.map(function (num) {
//   return num + 4; // loops run on each array 
// });
// console.log(mapArr);

//While .map() is about transforming every item, .filter() is about choosing specific items based on a rule.

// var arr = [1, 2, 3, 4, 5];

// var filter = arr.filter(function (num) { //The function inside .filter() must always return a boolean (true or false). If it's true, the item stays. If it's false, it's gone.
//   return num % 2 == 0; // check condition each it gives true/false always
// });
// console.log(filter)

// modern version
// const evenNumbers = arr.filter(num => num % 2 === 0);

// The Process (Step-by-Step)You pick up the bills one by one and put them in the bank:First Bill ($1$): 
// You put it in. The bank now has $1$.Second Bill ($2$): You add it to what's already inside ($1 + 2$). 
// The bank now has $3$.Third Bill ($3$): You add it ($3 + 3$). The bank now has $6$.Fourth Bill ($4$): 
// You add it ($6 + 4$). 
// The bank now has $10$.Fifth Bill ($5$): You add it ($10 + 5$). The bank now has $15$.

// var arr = [1, 2, 3, 4, 5];

//  var calculate = arr.reduce((acc,current)=>acc + current,0) // acc -> accumulator
//  console.log(calculate) // Ans => 15


// var arr = [1, 2, 3, 4, 5];
// var findArr = arr.find((num) => num % 2 == 0);
// console.log("find",findArr)


// HERE NEW PRAC

// Method,Goal,Result in your code
// .some(),Is any item > 0?,true
// .every(),Are all items > 0?,true
// .filter(),Which items are > 0?,"[1, 2, 3, 4, 5]"

//This snippet is a quick way to check if at least one element in an array meets a specific 
// condition. In this case, it's checking for positive numbers.
// .some() is very efficient. If you had an array of a million numbers and the first one matched your criteria, 
// it would stop right there rather than checking the other 999,999.
// var arr = [1, 2, 3, 4, 5]; // true
// var arr = [-2,-5,-13]; // false

// var some = arr.some((num) => num > 0); // it checks every element 'condition meeting' 
// // As soon as it finds one element that makes the condition true, it stops searching and returns true.
// console.log("find some", some); // The Result: Since 1 is greater than 0, the condition is met immediately.


var arr = [1, 2, 3];
// The .forEach() method executes the provided function once for each array element. 
// In your code, it multiplies each number by 2 and logs it to the console.

// It logs 2

// It logs 4

// It logs 6
var foreach = arr.forEach((num) => console.log(num * 3));
console.log("find some", foreach);

// for (let index = 0; index < arr.length; index++) {
//   console.log(arr[index])
// }

// function outer() {
//   var a = 2;
//   console.log(a);
//   function inner() {
//     var b = 3;
//     console.log(b);
//   }
//   inner();
// }
// outer();

var arr1 =[1,2,3]
var arr2 =[2,4,5]

var union = arr1.join(arr2)
console.log(union)