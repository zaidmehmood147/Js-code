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


// fetchUser(1)
//     .then(user => {
//         console.log("Got user:", user.name);
//         return user.id; // Passing ID to the next step
//     })
//     .then(userId => {
//         return fetchPosts(userId); // Returning a NEW promise
//     })
//     .then(posts => {
//         console.log("Got posts:", posts.length);
//     })
//     .catch(error => {
//         // This ONE catch handles errors from ANY of the steps above
//         console.error("Global Error Handler:", error);
//     });

// const getDashboardData = () => {
//   // Create 3 independent promises
//   const productsPromise = fetch('https://dummyjson.com/products?limit=3').then(res => res.json());
//   const usersPromise = fetch('https://dummyjson.com/users?limit=3').then(res => res.json());
//   const cartsPromise = fetch('https://dummyjson.com/carts?limit=3').then(res => res.json());

//   // Wait for ALL of them to finish
//   Promise.all([productsPromise, usersPromise, cartsPromise])
//     .then(([products, users, carts]) => {
//       console.log("--- Dashboard Loaded ---");
//       console.log("Products count:", products.products.length);
//       console.log("Users count:", users.users.length);
//       console.log("Carts count:", carts.carts.length);
//     })
//     .catch(err => {
//       console.error("One of the requests failed, so they all failed!", err);
//     });
// };

// getDashboardData();

// Method,Use Case,Result
// .then().then(),Sequential tasks (Step A then Step B).,Returns the last value.
// Promise.all(),Speed! Multiple tasks at once.,Fails if any fail.
// Promise.allSettled(),Bulk tasks where you don't mind if some fail.,Returns results for all.
// Promise.race(),"Timeouts or ""First one wins"" scenarios.",Returns the fastest result.


// In JavaScript, we use .then() for the "Success" and .catch() for the "Failure."

// Imagine this is the Burger Shop's system
// const orderBurger = new Promise((resolve, reject) => {
//     let isBurgerReady = true; // Change this to false to see the error!

//     if (isBurgerReady) {
//         resolve("🍔 Here is your burger!");
//     } else {
//         reject("❌ Sorry, we ran out of ingredients.");
//     }
// });

// // Now, YOU (the customer) use the pager:
// orderBurger
//     .then((food) => {
//         console.log(food); // This runs if it resolved
//     })
//     .catch((error) => {
//         console.log(error); // This runs if it rejected
//     });