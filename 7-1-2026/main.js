
                // parameter---
function swapImg(imgId,imgSrc){
    var image = document.getElementById(imgId)
    image.src = imgSrc 
    console.log("pic=>",image)
}

// function swapImg(imgId, imgSrc) {
//     // 1. Find the image on the page using its ID
//     var image = document.getElementById(imgId);
    
//     // 2. Change the source (src) to the new image URL
//     image.src = imgSrc;
    
//     // 3. Print the result in the browser console for debugging
//     console.log("pic=>", image);

function swap(img,src){
    var uimg = document.getElementById(img)
    img.src = src;
    
    

}

// function imageaddress(){
//     var address = document.getElementById("imglink")
//    address.href = "https://facebook.com"
//     console.log("address=>",address)
// }



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