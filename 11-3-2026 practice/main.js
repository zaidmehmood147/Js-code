// a = 4 ;
// b = 4 ;


// if (a===b) {
//     console.log("a is equals to b")
// }
// else {
//     console.log("error")
// }


// var date = new Date()
// console.log(date)


// var btn = document.getElementById("btn")
// btn.addEventListener("click" , function () {
//     alert("btn clicked")
// })


var btn = document.getElementById("btn") ;
var input = document.getElementById("input") ; 

btn.addEventListener("click" , function() {
    console.log(input.value)
})