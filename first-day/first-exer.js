const fs = require("fs");

// Read the file and parse its contents into an array of integers
const fileContent = fs.readFileSync("first-exer.txt", { encoding: "utf-8" });
const numbers = fileContent
  .split("\n")
  .filter((line) => Boolean(line))
  .map((line) => parseInt(line));

// Calculate the number of increases in consecutive elements
let consecutiveIncreases = 0;
for (let i = 1; i < numbers.length; i++) {
  const previousNumber = numbers[i - 1];
  const currentNumber = numbers[i];
  if (currentNumber > previousNumber) {
    consecutiveIncreases++;
  }
}

console.log("Number of consecutive increases:", consecutiveIncreases);

// Calculate the number of increases in the sum of three consecutive elements
let sumIncreases = 0;
for (let i = 3; i < numbers.length; i++) {
  const previousSum = numbers[i - 1] + numbers[i - 2] + numbers[i - 3];
  const currentSum = numbers[i] + numbers[i - 1] + numbers[i - 2];
  if (currentSum > previousSum) {
    sumIncreases++;
  }
}

console.log("Number of sum increases:", sumIncreases);
