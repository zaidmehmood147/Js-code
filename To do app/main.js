// {/* <h1>To do App</h1>
//     <div>
//     <input type="text" placeholder="Enter your Task" id="input" class="text">
//     <button onclick="addtask()" class="btn">Add Task</button>
//     <button onclick="Deltask()" class="btn">Delete Task</button>
//     </div>
//     <div>
//         <p id="para">this is para</p>
//     </div>
//     <script src="main.js"></script> */

var input = document.getElementById("input");
var addtask = function add(){
    var p = document.getElementById("para");
    // var newElement = document.nextSibling("p")
    var node = document.createTextNode(input);
    p.appendChild(node)
}