
                // parameter---
// function swapImg(imgId,imgSrc){
//     var image = document.getElementById(imgId)
//     image.src = imgSrc 
//     console.log("pic=>",image)
// }

// function swap(imgId, imgsrc) {
//     // 1. Get the element and store it in 'uimg'
//     var uimg = document.getElementById(imgId);
    
//     // 2. Use 'uimg' (the actual image element) to change the src
//     uimg.src = imgsrc;
// }

function swap(imgId, imgsrc) {
    var uimg = document.getElementById(imgId);
    if (uimg) {
        uimg.src = imgsrc;
    } else {
        console.error("Could not find image with ID:", imgId);
    }
}
//The Fix: We had to tell JavaScript: "Go to the address (imgId), find the building 
// there (uimg), and change the poster on the wall (.src)."

// html 
//  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTOGHxsC9M1B34riNQ9EiG1YbdTZGrTD5KXlQ&s" 
//      alt=""  width="300px"
//      id="images"
//      onclick="swap(id, 'https://images.pexels.com/photos/25309822/pexels-photo-25309822.jpeg?cs=srgb&dl=pexels-masoodaslami-25309822.jpg&fm=jpg')"></img>


// function swapImg(imgId, imgSrc) {
//     // 1. Find the image on the page using its ID
//     var image = document.getElementById(imgId);
    
//     // 2. Change the source (src) to the new image URL
//     image.src = imgSrc;
    
//     // 3. Print the result in the browser console for debugging
//     console.log("pic=>", image);

// function swap(imgId,imgsrc){
//     var uimg = document.getElementById(imgId)
//     imgId.src = imgsrc;

    

// }

function imageaddress(){
    var address = document.getElementById("imglink")
   address.href = "https://github.com/zaidmehmood147"
   address = address.href;
    console.log("address=>",address)
}



// function bigFotn(){
//     var para = document.getElementById("para")
//     para.className +=" size"
//     console.log("para",para)
// }

// function divpara(){
//    var div =  document.getElementsByTagName('div')
//     console.log("div=>",event.target)
//     event.target.style.backgroundColor = "red"
//     event.target.style.color = "white"
//     // event.target.style.fontSize = "100px"
//     event.target[1].innerText = "first para"
// var para =document.getElementsByTagName('div')
// var checktext =para[0].innerText
// console.log("para=>",checktext)

// var div = document.getElementsByTagName('div')
// var para = div[0].getElementsByTagName('p')
// console.log("para",para)
// }

// var div = document.getElementById('div')
// div.onclick = function(){
//     console.log("div",div)
// } 

// var div = document.querySelector('div')
// div.addEventListener("mouseover",function(){
//     console.log("chal gaya",div)
// })