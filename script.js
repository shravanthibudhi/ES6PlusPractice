/**
 * Let & Const
 */

// Let will allow you to append a string, but const will NOT. 
// However, const will allow you to push an array item.

function letVarExample(){

  if(true){
    var firstName = "Shravanthi";      // exists in function scope, defined in function scope

    var lastName = "Budhi;"     // exists in block scope, defined in block scope
  }

//   console.log("Function Scope Access: ", firstName);
//   console.log("Function Scope Access: ", lastName);

}

letVarExample()

const anotherExample = [1,2,3];
anotherExample.push(4);
// console.log(anotherExample);


/**
 * Template Literals
 */

// let firstName = "Shravanthi";
// let lastName = "Budhi";

// let fullName = `${firstName} ${lastName} `;
// // console.log(fullName);

// let searchResults = 50;
// // let output = `${ searchResults > 0 ? `${searchResults} results` : "No search results"}`
// // console.log(output);


/**
 * Arrow Functions
 */

// getFullName = () => {
//   let firstName = "Shravanthi";
//   let lastName = "Budhi";
//   return `${firstName} ${lastName}`;
// }

// // let output = getFullName();
// // console.log(output);

// let firstName = "Shravanthi";
// let lastName = "Budhi";
// // getFullNameShorter = (firstName, lastName) => console.log(`${firstName} ${lastName}`);
// // console.log("Shorted Example");
// getFullNameShorter(firstName, lastName);


/**
 * Default Parameters
 */

//  sortBy = (sortType = "Name", users) => {
//    console.log("Sorting By: ", sortType);
//  }

//  sortBy();
//  sortBy("Date", []);


/**
 * Iterating
 */

 let fruits = ["apple", "banana", "orange", "cherries", "jackfruit", "guava"];
 
//  console.log("For Loop:");
//  for(let index = 0; index < fruits.length; index++){
//    console.log(fruits[index]);
//  }
 
//  console.log("For-Of:"); // For every single array item, it assigns it to the value. No need to access index, and does not return anything
//  for(let fruit of fruits){
//    console.log(fruit);
//  }
 
//  console.log("forEach:"); // Accepts a value as a parameter. Iterates over an array, and does not return anything. Value will have the value of every item in the array
//  newFruits = fruits.forEach((fruit, index) => {
//    console.log(fruits[index]);
//    return fruit;
//  })
//  console.log(newFruits);
 
//  console.log("Map:"); // Similar to forEach, but enables modifications
//  newFruits = fruits.map((fruit) => {
//    return fruit;
//  }) .filter((value) => {
//      if(value == "banana") {
//          return false;
//      } else {
//          return true;
//      }
//  })
//  console.log(newFruits);
 
 /**
  * Destructuring Objects
  */
 
//  let fullName = {
//  	firstName: "Shravanthi",
//  	lastName: "Budhi"
//  }
 
//  const { firstName, lastName } = fullName;
//  console.log(firstName)
//  console.log(lastName)

//  let user = [ 
//  	{
//  		firstName: "James",
//  		lastName: "Walker"
//  	},
//  	(user) => {
//      console.log("I set the user: ", user);
//  	}
//  ] 
 
//  let [newUser, setUser ] = user;
//  console.log(newUser);
//  setUser({ firstName: "Jill", lastName: "Taylor"});


/**
 * Promises
 */

let promise = new Promise((resolve, reject) => {
    setTimeout (() => {
        resolve({
            firstName: "Shravanthi",
            lastName: "Budhi"
        });
        reject("Something went wrong")
    }, 1000);
})

// promise.then((response) => {
//   console.log("Here is the response after 1 s: " );
//   console.log(response);
// }) .catch((error) => {
//     console.log(error);
// })

/**
 * Fetch Data from API
 */

let userPromise = fetch("https://randomuser.me/api")
// console.log(userPromise)
userPromise.then((response) => {
    return response.json()
}) .then((resData) => {
    // console.log(resData.results[0].name.first)
    // console.log(resData.results[0].name.last)
})
.catch((error) => {

})