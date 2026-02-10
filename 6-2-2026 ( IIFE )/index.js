console.log("Hello world");
// IIFE (Immediately Invoked Function Expression)
// let outside = "outside"
// function test(){
//     // let uname = "khan";
//     let outside = "side"
//     console.log(outside);
// }
// test();
// (function(){
//     let uname = "ibrahim";
//     console.log(uname);
// })(); // Priv func

// (function() {
//     console.log("This is a test function");
// })();

// (function(myname,cast){
//   console.log(myname,cast)
// })('awan','zeus');

// let result = (function(uname,uage){
//   return uname + uage // , the return statement is like the "exit" sign.
// console.log(uname,uage)
// })('ali',30)


// let result = (function(uname, uage){
//   console.log(uname, uage); // 1. Log the data first
//   return uname + uage;      // 2. Then return the result
// })('ali', 30);

// console.log(result); // This will show "ali30"

// let result = (uname,uage)=> uname + uage

// console.log(result)

// function add(a,b){
// return console.log( a + b)
// }
// add(5,6)

// const add=(a,b)=>{return a + b}
// console.log(add(2,3))

// var uname = "khan"
// const obj ={
//     uname:"ali",
//     uage:20,
//     data:()=>{
//         console.log(this.uname) // it will find uname in global
//     }
// }
// obj.data()

// (function test(){
//     console.log("inside iife")
// })()

// function add(num) {
//   if (num <= 1) return 1;
//   return num * add(num - 1);
// }
// console.log(add(3)); //9,12,15,24

// let result = (function factorial(n) {
//   if (n <= 1) return 1;
//   return n * factorial(n - 1);
// })(5);
// console.log(result)

// function mult(num) {
//   if(num>=5)  return 5
//   return num * mult(num+1);
// }
// console.log(mult(3));

// function outer() {
//   let counter = 0;
//   return function inner() {
//     counter++
//     console.log(counter)
//    return counter;
//   }
// }
// const result = outer();
// result()
// result()
// result()
// result()

// //// cibs6khgkgb