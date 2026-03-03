// call the key -> get value

// CRUD
// C - create ->add data    
// C - create ->add data

import { getFirestore, doc, setDoc,serverTimestamp } from "./firebase.js";
import {
  getFirestore,
  doc,
  setDoc,
  serverTimestamp,
  addDoc,
  collection,
  getDocs,
  updateDoc,
} from "./firebase.js";
import { app } from "./index.js";
const db = getFirestore(app);
console.log("db=>", db);

// setDoc()(datastore with manual id)  -||-  addDoc(datastore with auto id)
// async function addData() {
//   await setDoc(doc(db, "users", "a"), {
//     name: "Los updata",
//     state: "CA",
//     country: "USA",
//     // time: new Date().   local machine
//     timestamp:serverTimestamp()  //server
//   });
// }
// addData()

var addbtn = document.getElementById("addBtn");
var quoteList = document.getElementById("quoteList");
addbtn.addEventListener("click", addQuote);


var quoteInput = document.getElementById("quoteInput");
const quoteCollection = collection(db, "quotes");
async function addQuote() {
  await addDoc(quoteCollection, {
    quote: quoteInput.value,
    time: serverTimestamp(),
  });
}

// setDoc()(datastore with manual id)  -||-  addDoc(datastore with auto id)
async function addData() {
  await setDoc(doc(db, "users", "a"), {
    name: "Los updata",
    state: "CA",
    country: "USA",
    // time: new Date().   local machine
    timestamp:serverTimestamp()  //server
async function getQuote() {
  const querySnapshot = await getDocs(quoteCollection);
  querySnapshot.forEach((doc) => {
    console.log("id=>",doc.id, " => ", doc.data().quote);
    const li = document.createElement("li");
    // li.innerHTML = ` ${doc.data().quote} + <button>Edit</button>`

    li.textContent = doc.data().quote + " ";
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
editBtn.addEventListener("click",function(){
  editBtn(doc.id,doc.data().quote)
})


    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    li.appendChild(editBtn);
    li.appendChild(deleteBtn);
    quoteList.appendChild(li);
  });
}
addData()
getQuote();

async function editBtn(id,oldQuote){
// await updateDoc(doc(db,"quote",id))
const newQuote =await prompt("enter new quote",oldQuote)
console.log("new quote",newQuote)
}