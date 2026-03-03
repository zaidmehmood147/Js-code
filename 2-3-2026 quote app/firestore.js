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
