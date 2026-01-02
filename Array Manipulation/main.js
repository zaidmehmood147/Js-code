// const unique = arr => [...new Set(arr)];
// // Example: unique([1, 2, 2, 3, 1, 4]) // Output: [1, 2, 3, 4]

// Shuffle an array: A common one-liner using the sort method and Math.random().
// javascript
// const shuffle = arr => arr.sort(() => Math.random() - 0.5);
// Flatten nested arrays: The flat(Infinity) method recursively flattens a multi-dimensional array.
// javascript
// const flat = arr => arr.flat(Infinity);
// // Example: flat([1, [2, 3], [4, [5]]]) // Output: [1, 2, 3, 4, 5]
 
// Utility Functions
// Check if an object is empty: Check the number of keys in an object.
// javascript
// const isEmpty = obj => Object.keys(obj).length === 0;
// Generate a random color: Create a random hexadecimal color code.
// javascript
// const randomColor = () => `#${Math.floor(Math.random()*16777215).toString(16)}`;
// Copy text to the clipboard: Use the browser's navigator.clipboard API. This is an asynchronous operation and should be handled with a try...catch in a real application.
// javascript
// const copyToClipboard = text => navigator.clipboard.writeText(text);
// // Usage: copyToClipboard('Hello World!');
// Sleep/Pause execution (asynchronously): Create a delay in an async function using Promises and setTimeout.
// javascript
// const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

// // Usage (inside an async function):
// // await sleep(2000);
// // console.log("Waited 2 seconds");
 
// Modern Syntax & Techniques
// Use the ternary operator for simple conditionals: A concise alternative to basic if/else statements.
// javascript
// // Instead of: if (isOnline) { status = "Online" } else { status = "Offline" }
// const status = isOnline ? "Online" : "Offline";
// Use default function parameters: Assign default values directly in the function signature to avoid undefined errors.
// javascript
// const greet = (name = "User") => `Hello, ${name}!`;
// // Usage: greet() // Output: "Hello, User!"
// Convert string to number with +: A quick way to cast a string to a number.
// javascript
// const str = "123";
// const num = +str; // num is 123 (a number)
// open wotlv boeing
 