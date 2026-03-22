// function checkEmail(emailId){
//    var email =  document.getElementById(emailId).value
//    if(email==""){
//     alert("please enter email")
//    }
//    console.log("email",email)
// //    console.log("email",emailId)
// } 

function checkmate(sub) {
  var uname = document.getElementById("sub")
  if(sub===""){
    alert("Please enter email to sign up")
  }
  console.log(sub)
}
////        /  //  ///  / /// / //  
function checkCampus() {
  var rollNumber = document.getElementById("rollNumber").value;
  var campus;
  switch (rollNumber) {
    case "10":
    case "101":
      campus = "zaitoon asharf";
      break;
    case "20":
      campus = "gulshan campus";
      break;
    case "100":
      campus = "bahadurabad campus";
      break;
    default:
      alert("you are not enrolled");
      break;
  }
  document.getElementById("campus").value = campus;
}

function checkCode(){
  var district = document.getElementById("district").value;
  var pc;
  switch (district) {
    case "East":
      pc = "101";
      break;
    case "West" :
      pc = "102";
      break;
    case  "South" :
      pc = "103";
      break;
    case "North":
     pc = "104"  ;
     break;
  }
  document.getElementById("pc").value = pc;
}

function expandPara() {
  var longPara ="dhfvdjshvdjhvcdjhsvbcjhvsdckjdsbcfjgejkbje"
  var para = document.getElementById("para").innerText =longPara;
  console.log("para", para);
}

function longpara() {
  var lpara = "Lorem ipsum dolor,ratione?assumenda! Voluptates sint consequatur rerum, laborum distinctio iusto, voluptates corrupti quod autem asperiores?tempora sapiente vitae pariatur, asperiores excepturi labore amet quibusdam Cupiditate molestiae reprehenderit architecto veniam culpa minima aut cumque reprehenderit, eius provident, pariatur nam saepe mollitia atque temporibus placeat consequuntur dolorum quasi nihilsed natus facilis fugiat dolorem deserunt totam illumsit  Iste repellendus voluptate, ad mollitia optio minima maiores itaque labore  provident debitis officiis vitae assumenda autem nulla reprehenderit at! amet consectetur adipisicing elit. reprehenderit quis! Et, veritatis necessitatibus quae cum voluptatibus eiusExercitationemipsa accusantium illum debitis ut fugiat architecto eaque dol"
  var p = document.getElementById("p").innerText = lpara ;
  
    
}

function renderList(){
    var orderlist = document.getElementById("list");
    var lists = "<img src='https://plus.unsplash.com/premium_photo-1661963826911-f369fa24c1a6?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YmlrZXN8ZW58MHx8MHx8fDA%3D' alt='' width='300px'>"
    orderlist.innerHTML = lists;
}

function invisible(){
   var img =  document.getElementById("img").className +=" hide"
   console.log("img=>",img)
}
function stable(){
   var img =  document.getElementById("img").className="stable"
   console.log("img=>",img)
}
// 