// function main(mynewfunction) {
//   console.log("hi inside main");
//   mynewfunction()
// }
// function mynewfunction() {
//   console.log("callback function");
// }
// main(mynewfunction);

// function calculate(num1, num2) {
//   let add = num1 + num2
//   addfunction(add)
// }
// calculate(2,3);
// function addfunction(add){
//     console.log(add)
// }

// function main(num1, num2, callback) {
//   return callback(num1, num2);
// }
// function add(num1, num2) {
//   return num1 + num2;
// }
// function sub(num1, num2) {
//   return num1 - num2;
// }


// console.log(main(4, 5, sub));

//  =-- high order functions

// var arr = [1, 2, 3, 4, 5, 6, 7];
// var newArr = arr.map(callback)
// function callback(value){
//     return value + 2
// }
// var newArr = arr.map(function(value){
//     return value + 2
// })
// var newArr = arr.map((value) => value + 2);
// console.log(newArr);

// var arr = [1, 2, 3, 4, 5, 6, 7]; //iteration

// arr.forEach(callback)
// function callback(value){
//     console.log(value + 2)
// }
