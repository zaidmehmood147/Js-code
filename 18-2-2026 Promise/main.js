// A Promise is an object that takes a function (called an executor). 
// This function provides two tools: resolve (for success) and reject (for failure).

// const myFirstPromise = new Promise((resolve, reject) => {
//     const success = 0;

//     if (success) {
//         resolve("The data arrived!"); // Success!
//     } else {
//         reject("It failed."); // Error!
//     }
// });

// // Consuming the promise
// myFirstPromise
//     .then(zaid => console.log(zaid))  // Runs if resolve() is called
//     .catch(zed => console.error(zed)); // Runs if reject() is called

// const myPromise = new Promise((resolve , reject) => {
//     const torf = 1;
//     if(torf){
//         console.log("success")
//     }
//     else{
//         console.log("error!!")
//     }
// }
// )
// myPromise
// .then(zaid => console.log(zaid))
// .catch(zed => console.log(zed))