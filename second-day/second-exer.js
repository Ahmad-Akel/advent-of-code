const fs = require("fs");

// Read the file and parse its contents into an array of objects
const fileContent = fs.readFileSync("second-exer.txt", { encoding: "utf-8" });
const instructions = fileContent
  .split("\n")
  .filter((line) => Boolean(line))
  .map((line) => {
    const [direction, value] = line.split(" ");
    return {
      action: direction,
      value: parseInt(value),
    };
  });

let submarine = {
  position: 0,
  depth: 0,
};

// Simulate submarine movement based on instructions
for (const instruction of instructions) {
  switch (instruction.action) {
    case "forward":
      submarine.position += instruction.value;
      break;
    case "down":
      submarine.depth += instruction.value;
      break;
    case "up":
      submarine.depth -= instruction.value;
      break;
  }
}

console.log("Result 1:", submarine.position * submarine.depth);

// Reset submarine and add an 'aim' property
submarine = {
  position: 0,
  depth: 0,
  aim: 0,
};

// Simulate submarine movement with aiming
for (const instruction of instructions) {
  switch (instruction.action) {
    case "forward":
      submarine.position += instruction.value;
      submarine.depth += submarine.aim * instruction.value;
      break;
    case "down":
      submarine.aim += instruction.value;
      break;
    case "up":
      submarine.aim -= instruction.value;
      break;
  }
}

console.log("Result 2:", submarine.position * submarine.depth);
