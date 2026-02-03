// Javascript Conditions and Loops

//  Why Conditions & Loops Matter
// - They help your program make decisions
// - They let your code repeat tasks
// - Without them, JavaScript is useless for logic

// Real use cases: Login validation, Form checks, Iterating data from APIs

//  Conditions (Decision Making)
// Conditions run code only when a condition is true.

//  if statement
// let age = 20;
// if (age >= 18) {
//   console.log("Eligible to vote");
// }
// - Code runs only if condition is true

//  

//  if–else
// if (age >= 18) {
//   console.log("Adult");
// } else {
//   console.log("Minor");
// }
// - Two paths • One always runs

//  

//  else if
// let marks = 75;
// if (marks >= 90) {
//   console.log("Grade A");
// } else if (marks >= 70) {
//   console.log("Grade B");
// } else {
//   console.log("Grade C");
// }
// // - Multiple conditions checked in order



// //  switch statement
// // Used when checking one value against many cases.
// var day = 2;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   default:
//     console.log("Invalid day");
// }
// //  Always use break to avoid fall-through.

// //  

// //  Loops (Repetition)
// // Loops run code multiple times.

// //  for loop
// // Best when number of iterations is known.
// // for (let i = 1; i <= 5; i++) {
// //   console.log(i);
// // }


// //  while loop
// // Runs while condition is true.
// // let i = 1;
// // while (i <= 3) {
// //   console.log(i);
// //   i++;
// // }
// //  

// //  do–while loop
// // Runs at least once.
// // let i = 5;
// // do {
// //   console.log(i);
// //   i++;
// // } while (i < 3);
// //  

// //  Loop Control Keywords
// // - break → stops loop
// // - continue → skips iteration
// for (let i = 1; i <= 5; i++) {
//   if (i === 3) continue;
//   console.log(i);
// }


// //  Common Beginner Mistakes
// // - Infinite loops
// // - Missing break in switch
// // - Using == instead of ===
// // - Wrong loop condition



// //  Mini Practice Task
// // - Check if a number is even or odd
// // - Print numbers from 1 to 10
// // - Print only even numbers
// // - Use switch to print day name


// let num = 7;
// if (num % 2 === 0) {
//   console.log("Even number");
// } else {
//   console.log("Odd number");
// }

// // Uses modulus operator • Remainder 0 → even • Otherwise → odd




// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let i = 1; i <= 10; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }



// var day = 3;
// switch (day) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   default:
//     console.log("Invalid day");
// }
