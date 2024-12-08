//Question 01

let name = "John";
console.log("Hello, " + name + "!");

//Question 02

let a = 5;
let b = 10;

let sum = a + b;

console.log(sum);

//Question 03

let age = 25;
console.log("I am " + age + " years old.");

//Question 04

let math = 90;
let english = 85;
let physics = 90;
let totalMarks = math + english + physics;
let averageMarks = totalMarks / 3;
console.log(totalMarks);
console.log(averageMarks);

//Question 05

let userAge = 18;
let userIcome = 2400;

let user_name = "Rayhanil Raz";
let user_friend = "Kuddus";

console.log(userAge);
console.log(userIcome);
console.log(user_name);
console.log(user_friend);

//Question 06

let sentence = "Hello, how are you today?";
let result = sentence.search("Hello");

if (result !== -1) {
  console.log("The word 'Hello' is present in the sentence.");
} else {
  console.log("The word 'Hello' is not present in the sentence.");
}

//Question 07

let userName = prompt("Please enter your name").trim();
let greetingMessage = "Welcome to our site, " + userName;

console.log(greetingMessage);
