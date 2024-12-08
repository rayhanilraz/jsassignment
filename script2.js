//Question 08

let userName = prompt("What is your name?");
let favoriteLanguage = prompt("What is your favorite programming language?");
let startYear = prompt("What year did you start learning it?");

let message = `
Hello ${userName}!
You have been coding in ${favoriteLanguage} since ${startYear}.
`;

console.log(message);

//Question 09

function checkYahooEmail(email) {
  const lowercasedEmail = email.toLowerCase();

  const yahooDomain = "@yahoo.com";

  if (lowercasedEmail.includes(yahooDomain)) {
    console.log("The email address is a Yahoo address.");
  } else {
    console.log("The email address is not a Yahoo address.");
  }
}

checkYahooEmail("test@gamil.com");

//Question 10

function checkBy10(number) {
  if (number % 10 === 0) {
    console.log("The number is divisible by 10.");
  } else {
    console.log("The number is not divisible by 10.");
  }
}

checkBy10(23);
checkBy10(40);
checkBy10(99);

//Question 11

let num = 2;
if (num % 2 === 0) {
  console.log(num, " is even");
} else {
  console.log(num, " is odd");
}

//Question 12
