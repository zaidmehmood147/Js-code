// const mainobj={
//       stdData:function(message){
//  console.log(message + this.name)
// }
// }
// const obj = {
//     name :"ali",
//     age:20,
// }
// mainobj.stdData.call(obj,"hello ")

// const mainobj={  // Function Borrowing.
//       stdData:function(message, message2,message3,message4){
//  console.log(message + message2 + this.funct() + message3 + message4)
// }
// }
// const obj = {
//     name :"ali",
//     age:20,
//     funct :function(){
//         alert("you are late")
//     }
// }
// mainobj.stdData.apply(obj,["hello  ","zaid ","today ","hello2 ","hello3 "])

// .call(): You pass arguments one by one: ...call(obj, "hello", "zaid")

// .apply(): You pass arguments as a single list: ...apply(obj, ["hello", "zaid"])

// Analogy: call is like handing someone tools one at a time. apply is like handing them the whole toolbox at once.
//  br
// You use bind when you don't want to run the code right now, but you want it ready for later. Common real-world uses:

// Buttons: "When this button is clicked later, run this function but keep it attached to my User object."

// Timers: "Wait 3 seconds, then run this function."
// const obj = {
//     a: "hello",
//     b: 10
// }
// function test() {
//    return console.log(this.b)
// }

// const bindFunction  = test.bind(obj)
// bindFunction()


// const obj = { b: 10 };

// function test() {
//     console.log(this.b);
// }

// // 1. We pair the function to the object.
// // It DOES NOT run yet. It just creates a "Paired Version" of 'test'.
// const pairedRemote = test.bind(obj);

// // 2. Later on... maybe 10 minutes later...
// // We can use that paired version.
// pairedRemote(); // Result: 10

//   ---bind()

// const mainobj = {
//     name: "ali",
//     age: 30,
//     stdData: function () {
//         console.log(this.age)
//     }
// }
// const obj = {
//     name: "ali",
//     age: 20,
// }
// // mainobj.stdData.call(obj)
// // const bindFunction = mainobj.stdData.bind(obj)
// // bindFunction()
// const personalbar = {
//     function(){
//       return console.log(this.name)
//     }
// }

// personalbar.call( obj)