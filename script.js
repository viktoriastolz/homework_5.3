"use strict";

let input = prompt("Enter an integer N:");

if (!input?.trim() || isNaN(input.trim()) || !Number.isInteger(Number(input.trim()))) {
  alert("Error: Please enter a valid integer!");
} else {
  const N = Number(input);
  if (N < 1) {
    alert("Error: The number must be greater than or equal to 1!");
  } else {
    let result = "";
    for (let i = 1; i <= 100; i++) {
      if (i * i <= N) {
        result += i + " ";
      } else {
        break;
      }
    }
    alert("Numbers whose squares do not exceed " + N + ": " + result.trim());
  }
}

