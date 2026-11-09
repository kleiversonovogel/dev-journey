const prompt = require("prompt-sync")() // imports the package for user input
const num1 = Number(prompt("1st number: ")) //read the number
const num2 = Number(prompt("2nd number: "))
const sum = num1 + num2 // calculetes the sum
console.log(`The sum is ${sum}`) // show the result