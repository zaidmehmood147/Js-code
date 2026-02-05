// const mainobj={
//       stdData:function(message){
//  console.log(message + this.name)
// }
// }
// const obj = {
//     name :"ali",
//     age:20,
// }
// mainobj.stdData.call(obj,"hello")

// const mainobj={
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
// mainobj.stdData.apply(obj,["hello  ","hello2 ","hello3 ","hello2 ","hello3 "])

// const obj = {
//     a: "hello",
//     b: 10
// }
// function test() {
//    return console.log(this.b)
// }

// const bindFunction  = test.bind(obj)
// bindFunction()

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
// const bindFunction = mainobj.stdData.bind(obj)
// bindFunction()

// personalbar.call( obj,argssssss)