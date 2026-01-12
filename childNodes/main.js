
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Document (childNodes)</title>
// </head>
// <body>
//     <div id="div1"><p>First paragraph</p><p>Second paragraph</p><p>Third paragraph</p></div>
//     <script src="main.js"></script>
// </body>
// </html>

// var doc = document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].innerText =  "Hello";

// console.log(doc)

// var doc = document.getElementById("div1").nodeType;
// console.log(doc)

// var doc = document.getElementsByTagName("BODY").nodeType;
// console.log(doc)
//   Simpler way to write ts
// console.log(document.body.nodeType); // 1 is text 3 is junk

// var doc = document.getElementById("body").childNodes;
// console.log(doc) // it is showing junk as text


// word checker 

function check(){
    var input = document.getElementById("input").value ;
    console.log (input)

    var reverse = input.split("").reverse().join("");
   console.log("reverse", reverse);

   if(input == reverse){
    alert("Palindrom word detected") ;
     
   }
   else {
    alert("Try again")
   }
}




