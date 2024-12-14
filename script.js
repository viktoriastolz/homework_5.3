"use strict";

const userInput = prompt("Enter an integer N:");

if (userInput === null) {
    alert("Error: Value cannot be null.");
} else {
    const trimmedInput = userInput.trim();

    if (trimmedInput === "") {
        alert("Error: Input is empty.");
    } else if (!/^\d+$/.test(trimmedInput)) {
        alert("Error: The input must be an integer.");
    } else {
        const N = parseInt(trimmedInput, 10);

        alert("Valid input! Calculating...");

        const results = [];

        let i = 1;
        while (i <= 100) {
            if (i * i <= N) {
                results.push(i);
            } else {
                break; 
            }
            i++;
        }

        alert(`Numbers from 1 to 100 whose squares do not exceed ${N}: \n${results.join(", ")}`);
    }
}

