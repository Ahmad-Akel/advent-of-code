const fs = require("fs");

// Read the file and split it into an array of binary numbers
const fileContent = fs.readFileSync("third-exer.txt", { encoding: "utf-8" });
const lines = fileContent.trim().split("\n");

// Function to calculate the count of 0s and 1s at each position
function getCount(lines) {
  const length = lines[0].length;
  const zeros = Array(length).fill(0);
  const ones = Array(length).fill(0);

  for (const line of lines) {
    const bits = [...line];
    bits.forEach((bit, index) => {
      if (bit === "0") {
        zeros[index]++;
      } else {
        ones[index]++;
      }
    });
  }

  return { zeros, ones };
}

// Function to calculate the gamma rate
function calculateGammaRate(lines) {
  const { zeros, ones } = getCount(lines);
  let gammaRate = "";

  for (let i = 0; i < zeros.length; i++) {
    gammaRate += ones[i] > zeros[i] ? "1" : "0";
  }

  return gammaRate;
}

// Function to calculate the epsilon rate
function calculateEpsilonRate(lines) {
  const { zeros, ones } = getCount(lines);
  let epsilonRate = "";

  for (let i = 0; i < zeros.length; i++) {
    epsilonRate += zeros[i] > ones[i] ? "1" : "0";
  }

  return epsilonRate;
}

// Function to convert a binary string to decimal
function binaryToDecimal(binary) {
  return parseInt(binary, 2);
}

// Calculate the gamma rate and epsilon rate
const gammaRate = calculateGammaRate(lines);
const epsilonRate = calculateEpsilonRate(lines);

// Convert the binary rates to decimal and calculate power consumption
const powerConsumption =
  binaryToDecimal(gammaRate) * binaryToDecimal(epsilonRate);

console.log("Power Consumption:", powerConsumption);
