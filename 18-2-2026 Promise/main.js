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

// 1. We "Order" the data (this returns a Promise/Pager)
// fetch('https://dummyjson.com/users/1')
  
//   // 2. When the pager buzzes, turn the "raw response" into a "JS object"
//   .then(response => response.json()) 
  
//   // 3. Now that we have the actual data, use it!
//   .then(user => {
//     console.log("The user name is:", user.firstName);
//   })
  
//   // 4. If the internet dies or the user doesn't exist:
//   .catch(err => {
//     console.log("Something went wrong!", err);
//   });


// fetch('https://jsonplaceholder.typicode.com/todos/1')
// .then(response => response.json)
// .then(id)

// br

// 1. Ask for the data
// fetch('https://jsonplaceholder.typicode.com/todos/2') // 1 = user 1 , 2 = user 2we have to change num after /
  
//   // 2. The "Pager" buzzes. We tell JS to turn the response into a readable object
//   .then(response => response.json())
  
//   // 3. Now we have the actual data! Let's print it.
//   .then(data => {
//     console.log("Here is your Todo:", data);
//     console.log("Task is:", data.completed);
//   })
  
//   // 4. If the link is broken or internet is down, this runs:
//   .catch(error => {
//     console.error("Oh no, an error!", error);
//   });

// if we want to see all data
fetch('https://jsonplaceholder.typicode.com/todos') // No ID at the end
  .then(res => res.json())
  .then(allData => {
    // Since this is an ARRAY, we use brackets [index]
    console.log("First item:", allData[10].title);
    // console.log("Second item:", allData[1].title);
    
    // Or see how many we got
    console.log("Total todos received:", allData.length); 
  });