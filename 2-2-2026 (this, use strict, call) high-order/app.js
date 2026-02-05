console.log("Js is alive");
"use strict"; // When you add "use strict"; to the top of your file, you're telling the computer: 
// "Don't let me get away with sloppy mistakes. If I do something weird, stop me immediately."
// const person = {
//     firstName: "zed",
//     lastName: "dom",
//     fullName: function()  {
//       return  this.firstName + " " + this.lastName; // without return it would be undefined
//     }
// };

// console.log(person.fullName())

// "use strict";
// let mname = this;   // 1. Outside a function, 'this' refers to the "Global Object" (usually the Window).
// console.log(mname); // 2. This will print the Window object (or an empty object in some editors).

// call();             // 3. ERROR!

               // khan
// function student(fname) {
//     return console.log(`hello  ${this.lastName}  ${this.age}  ` )
// }
// const student1 = {
//     firstName: "bilal",
//     lastName: "awan",
//     age: 20,
//     roll:102
// }
// const student2 = {
//     firstName: "kashif",
//     lastName: "khan",
//     age: 30
// }

// student.call(student2,"khan")

// const studentData = {
//     fullName: function (test,test2) {
//         return console.log(`hello  ${test} ${test2}  ${this.fname}  ${this.age}  `)
//     }
// }
// const student1 ={
//     fname:"fah",
//     lname:"else",
//     age: 1010
// }
// studentData.fullName.call(student1,"zaid","mehmod")

// function test(){
//     return console.log(this.name.mname)
// }
// const std = {
//     name:{
//         mname:"ali khan"
//     }
// }
// // test("ali")
// test.call(std)