 "use strict";

let input = prompt("Enter an integer:")?.trim(); 

if (!input || isNaN(input) || !Number.isInteger(Number(input))) {
  alert("Error: Please enter a valid integer!");
} else {
  const maxValue = Number(input); 
  if (maxValue < 1) {
    alert("Error: The number must be greater than or equal to 1!");
  } else {
    let result = "";
    for (let i = 1; i <= Math.floor(Math.sqrt(maxValue)); i++) { 
      result += i + " ";
    }
    alert("Numbers whose squares do not exceed " + maxValue + ": " + result.trim());
  }
}
