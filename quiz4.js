// 1) Rewrite the following three functions as arrow functions. Make sure to assign them to a const identifier.

// a) function createFullName(firstName, lastName) {
//   return firstName + " " + lastName;
// }

// b) function doubleNumber(number) {
//   return number * 2;
// }

// c) function getEvenNumbers(array) {
//   let evenNumbers = [];
//   for (let i of array) {
//     if (i % 2 === 0) {
//       evenNumbers.push(i);
//     }
//   }
//   return evenNumbers;
// }

// a)
const createFullName(firstName, lastName) => firstName + " " + lastName;

// b)
const doubleNumber(number) => number * 2;

// c)
const getEvenNumbers(array) => {

   let evenNumbers = [];

   for (let i of array) {
        if (i % 2 === 0) {
            evenNumbers.push(i);
         }
   }
   return evenNumbers;
}



// 2) The product owner on your development team believes they've seen a pattern as to which customers purchase the most socks. To verify, you've been asked to write a function that processes an array of customer objects and return a new array that contains only customers that match ANY of the following criteria:

// name starts with a 'C' (upper or lowercase)
// address contains no undefined fields
// the city is Peoria and the state is AZ
// membership level is GOLD or PLATINUM unless the customer is younger than 29, then SILVER is okay too
// The array of customer objects will have the following schema:

// const customers = [
//     {
//         name: 'Sam',
//         address: {
//             street: '1234 W Bell Rd',
//             city: 'Phoenix',
//             zip: '85308',
//             state: 'AZ'
//         },
//         membershipLevel: 'GOLD',
//         age: 32
//     },
//     //more customers with the same schema
// ];

// Note: The solution to this problem does not require the use of callbacks. You will also need to use dot notation to access the properties. For example, customers[0].name would return "Sam".


function customersWhoBuyMostSocks() {
    if (customers[i].name.startsWith("C") || customers[i].name.startsWith("c")) {
       
        if (typeof customers[i].address != undefined){
  
          if (customers.city[i] === "Phoenix" && customers.state[i] === "AZ") {
            return customers[i].address;
          }
  
        if (customers[i].membershipLevel === "GOLD" || customers[i].membershipLevel === "PLATINUM") {
  
         return customers[i].membershipLevel
  
        }  
            else if (customers[i].age < 29 || customers[i].membershipLevel === "SILVER") {
                 return [customers[i].age, customers[i].membershipLevel];
             }
        }
    }
    return customers[i].name;
  }