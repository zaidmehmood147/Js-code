console.log("js zinda hai")

function summonDance() {
            document.getElementById('cat-container').style.display = 'block';
        }
//  
// var array = [
//    {uname : "zaid111" } , 
//    { class : "XI"} , 
//    { fname : "zaid mehmood"}
// ]
// for (let index = 0; index < array.length; index++) {
//     console.log(array[index]);
    
// }

// var arr =[{name:"ali"},{name:"bilal"}]
// for (let index = 0; index < arr.length; index++) {
//     console.log(arr[index])
// }

//  var arr = [0,1,2,3,4,5]
// var arrMap = arr.map(function(data){
//     return data
// })
// console.log("arrMap",arrMap)

// fetch('https://dummyjson.com/users')
// .then(res => res.json())
// .then(console.log);

// console.log(uname)
// // tdz
// let uname = "ali"

// if (true) {
//    let fname = "ali" // block scope
// }
// console.log("fname=>",fname)

// function test() {
//     //  fname = "ali2" // global 
//     // var fname = "ali2" ;
// }
// test()
// console.log("fname=>",fname)

// token = "fregerfger"
// function outer() {
//     let fname = 12
//     function inner() {
//         let lname = "khan"
//         fname++
//         console.log(fname, lname)
//     }
//     inner()
//     inner()
//     inner()
// }
// outer()

// function test2(){
//     let a = 2
//     return a
    
// }
// test2()



// console.log(a)

// function add(a,b){
//    return  result = a + b
// }
// console.log(result())



// function add(){
//     let counter = 20
//     counter++
//     return counter
// }
// add()
// add()
// console.log(counter)

// function add() {
//   let counter = 0;
//   function plus() {
//     counter += 1;
// console.log(counter)
// }
//   plus();   
// }
// add()
// add()


//
// function myCounter2() {
//   let counter = 0;
//   return function() {
//     counter++; // 1  ,2,3
//     console.log(counter)
//     return counter;
//   };
// }
// const add = myCounter2();
// add();
// add();

//   // Create instance of StudentAge
// const student1 = new StudentAge("John", "Doe");

// // Inherited properties work
// console.log(student1.fname); // "John"
// console.log(student1.lname); // "Doe"

// // Inherited method works
// student1.getData(); // Logs: "JohnDoe"   
        



// class studentData {
//     constructor(fname, lname) { 
   
//         this.fname = fname;
//         this.lname = lname;
//     }
//     getData(){
//         return console.log(this.fname + this.lname)
//     }
   
// }


// class StudentAge extends  studentData{
//     // constructor
// }



// var student1 = new studentData("ali","khan")

// student1.getData()


// synchronous  //line by line
// asynchronous //

// console.log("first line")

// async function test() {
//  setTimeout(()=>{
//     console.log("set time out")
// },2000)
// }
// setTimeout(test)

// console.log("second line")