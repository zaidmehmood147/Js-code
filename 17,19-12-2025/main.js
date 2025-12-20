// 17 12 2025

// ++a pre increment
// a++ post increment

// var num = 2;

// var num2 = num + 1;
// var num2 = num++; //shortcut

// console.log(num2)
// var num2 = --num;

// console.log(num)

var a = 1;
var b = 1;

// ++a   → 2
// b++   → 1
// b     → 2
// a++   → 2
// a     → 3
// ----------------
// Total = 2 + 1 + 2 + 2 + 3 = 10

//  2 + 1 + 2 +  2  3 
//          2     2    1    2     1
// // var total = ++a + b++ + b + a++ + a
// var total = ++b + ++b + ++a + ++a
//          2     2    2    3    2    1
// var total = a++ + ++b + a + b++ + a + b
// console.log(total) //10, 8 , 9 , 6

// var num = (1 * 2) * (3 + 2);
// console.log(num);

// var mname = "ibrahim "

// var lname = prompt("enter your lname")

// alert( "Hi " +mname + lname)
// console.log("hi"  + " " + mname + " " + lname)

// console.log(`Hi ${mname} ${lname} how are you`)
// template literals ` `

// var age = prompt("enter your age"30)
// console.log(age)
// study assignment (why give null when cancel)
// prompt("enter")
// var mname = prompt("enter your name");
// var age = +prompt("enter your age");
// var marks = Number(prompt("enter your marks"));
// if (mname == "ali" && age !== 30 || age < 30 && marks <=100) {
//   console.log("correct", mname , age , marks);
// } else if (mname == "bilal") {
//   console.log("correct", mname);
// } else {
//   console.log("incorrect");
// }

//   -- nested if
// diff b/w. if else if and nested if 
// if else  (if filed then else will also check)
// nested if( if failed then next if will not be check)
// means the second if will check after first if true
// var mname = "li"
// var age = 10

// if(mname=="ali"){
//     if(age==10)
//     console.log("true name and age")
// }

//  --Array 

// var arr = [ , ,20,"ali",100]
// console.table(arr)
// console.log(arr[2])

// var arr =[]

// arr[200] = "ali" //length 201 (200 index)
// arr[150] = "asad" // 151
// console.log(arr[arr.length-50])

// console.log(arr[arr.length-51])
// console.log(arr.length)




// 19 12 2025


//  BOM browser object model
// Read only (Ok)
// alert("hi alert")

// Variables
// vary(change) ables(able)
// var uname = {
//   names: "ibrahim",
//   roll: 30,
//   age: 18,
// };
// var myName = "ibrahim";  //assign
// var myName ="khan"
// const lastName = "khan";

// // console.warn(myName);
// // console.error(myName);
// console.table(uname);

// var test;
// test ="tofy"
// console.log(test)

// var empty = null
// console.log(empty)
// // console.log(myFirstName)
// let myFirstName = "ibrahim"  //reserved
// myFirstName //reinitialized
// myFirstName = "ibrahim change" //reassign


// let cannot access(TDZ = temporal dead zone)

// variable name convention
// pascal case 
// camel case (easy to read and write)
// snake case 
// train case

// var number = 10
// var number = "10"

// var numberPlus = number - 3 //(temporary) //coersion
// console.log("number",number,numberPlus)

// Step 1️⃣ Variable declaration
// var number = 10;


// number is a number type

// Value = 10

// Step 2️⃣ Variable re-declared
// var number = "10";


// var allows re-declaration

// The old value 10 is overwritten

// Now number is a string, not a number

// number = "10"   (string)

// Step 3️⃣ Subtraction operation
// var numberPlus = number - 3;


// Here’s the important part 👇

// number is "10" (string)

// 3 is a number

// - (minus) works only with numbers

// 👉 JavaScript automatically converts "10" into 10
// This automatic conversion is called type coercion.

// So it becomes:

// 10 - 3 = 7

// numberPlus = 7


// ⚠️ This conversion is temporary — number is still a string.

// Step 4️⃣ Console output
// console.log("number", number, numberPlus);


// Output:

// number 10 7


// "number" → just a label

// number → "10" (string)

// numberPlus → 7 (number)

// Key points to remember 🧠
// 1️⃣ var allows re-declaration
// var x = 5;
// var x = "5"; // allowed

// 2️⃣ - forces numeric conversion
// "10" - 3  →  7

// 3️⃣ + behaves differently
// "10" + 3  →  "103"  (string joining)

// One-line summary

// 👉 JavaScript converts "10" into a number temporarily during subtraction, which is why the result is 7.

// If you want, I can also:

// show this with a diagram

// compare + vs - vs *

// explain type coercion vs type conversion

// var myName
// var $name
// var _name   
 // var 007khan
// var 007champion

// var modulus = 10 /0
// console.log(modulus) // => infinity