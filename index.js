// import PromptSync from "prompt-sync";
// let prompt = PromptSync();
// let num = prompt("Enter a number? ");
// for (let i = 1; i <= 10; ++i) {
//   console.log(num + " x " + i + " = " + num * i);
// }

// let student = {
//   firstname: "Salman",
//   lastname: "Ahmed",
//   fullname: function () {
//     return this.firstname + this.lastname;   this word functionality
//   },
// };
// console.log(student.fullname());

// Recursive functions
// function getrecursive(nr) {
//   console.log(nr);
//   if (nr > 0) {
//     getrecursive(--nr);
//   }
// }
// getrecursive(5);

// function factorial(n) {
//   if (n <= 1) {
//     return 1;
//   } else {
//     return n * factorial(n - 1);
//   }
// }
// console.log(factorial(8));

// const one = () => console.log("one");
// const two = () => console.log("two");
// const three = () => {
//   console.log("three");
//   one();
//   two();
// };
// const four = () => {
//   console.log("four");
//   setTimeout(one, 0);
//   three();
// };
// four();

// setTimeout(() => {
//     console.log("hello");
//   }, 4000);

// setInterval(() => {
//     console.log("HEllo");
//   }, 1000);

// concurency   means doing several task simulateously
// call back  call function from other function
// function doflexiblestuff(callback) {
//   callback();
//   console.log("Do flexiblestuff");
// }

// const function1 = () => console.log("Hello from function 1");
// doflexiblestuff(function1);

// function judge(grade) {
//   switch (true) {
//     case grade === "A+":
//       console.log("You got a ", grade, ": Perfect!");
//       break;
//     case grade === "A":
//       console.log("You got a ", grade, ": Excellent!");
//       break;
//     case grade === "B":
//       console.log("You got a ", grade, ": Good Job!");
//       break;
//     case grade === "C":
//       console.log("You got a ", grade, ": Ok!");
//       break;
//     case grade === "D":
//       console.log("You got a ", grade, ": Need to improve!");
//       break;
//     default:
//       console.log("An", grade, ": Oops, Try again");
//       break;
//   }
// }

// function getgrade(percentage, callback) {
//   let grade;
//   switch (true) {
//     case percentage >= 90:
//       grade = "A+";
//       break;
//     case percentage >= 80:
//       grade = "A";
//       break;
//     case percentage >= 70:
//       grade = "B";
//       break;
//     case percentage >= 60:
//       grade = "C";
//       break;
//     case score >= 50:
//       grade = "D";
//       break;
//     default:
//       grade = "F";
//   }
//   callback(grade);
// }

// getgrade(95,judge)

// promises    simply a function that return objects that consist of callback
// let promise = new Promise(function (resolve, reject) {
//   // Execution
// });
// promise.then(
//   function (result) {
//     // On success             syntax of promise
//   },
//   function (error) {
//     // on error
//   }
// );

// let promise = new Promise(function (resolve, reject) {
//   resolve("Javascript!");
// });
// promise.then(
//   function (result) {
//     console.log("succes: ",result);
//   },
//   function (error) {
//     console.log("Error: ",error);
//   }
// );

// let promise = new Promise(function (resolve, reject) {
//   reject("Bad Javascript!");
// });
// promise.then(
//   function (result) {
//     console.log("success: ", result);
//   },
//   function (error) {
//     console.log("error: ", error);
//   }
// );

// let promise = new Promise(function (resolve, reject) {
//   reject("Bad Javascript!");
// });
// promise.catch(function (error) {
//   console.log(error);
// });

// let promise = new Promise(function (resolve, reject) {
//   resolve("Javascript!");
// });
// promise
//   .then(function (succes) {
//     console.log("Success: ", succes);
//   })
//   .catch(function (error) {
//     console.log("Error: ", error);
//   });

// import PromptSync from "prompt-sync";

// let prompt = PromptSync();
// let age = prompt("Enter your age?");
// console.log(age);

// import { num, num1, a } from "./index1.js";

// console.log(num);
// console.log(num1);
// console.log(a);


