// "use strict"
// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     fullName: function()  {
//         return this.firstName + " " + this.lastName;
//     }
// };

// console.log(person.fullName())
// "use strict"
// let mname = this;
// console.log(mname)

//  --- call()

// function student(fname) {
//     return console.log(`hello  ${fname}  ${this.roll}  ` )
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

// student.call(student1,"khan")

// const studentData = {
//     fullName: function (test,test2) {
//         return console.log(`hello  ${test} ${test2}  ${this.fname}  ${this.age}  `)
//     }
// }
// const student1 ={
//     fname:"ali",
//     lname:"khan",
//     age:20
// }
// studentData.fullName.call(student1,"test","test2")

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