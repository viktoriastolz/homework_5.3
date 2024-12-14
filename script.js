"use strict";

// Основна програма
const userInput = prompt("Введіть ціле число N:");

if (userInput === null) {
    alert("Помилка: Значення не може бути null.");
} else {
    const trimmedInput = userInput.trim();

    if (trimmedInput === "") {
        alert("Помилка: Порожній ввід.");
    } else if (!/^\d+$/.test(trimmedInput)) {
        alert("Помилка: Введене значення має бути цілим числом.");
    } else {
        const N = parseInt(trimmedInput, 10);

        alert("Коректне введення! Обчислюємо...");

        // Вивести всі числа від 1 до 100, квадрат яких не перевищує N
        const results = [];

        let i = 1;
        while (i <= 100) {
            if (i * i <= N) {
                results.push(i);
            } else {
                break; // Завершити цикл, якщо квадрат числа перевищує N
            }
            i++;
        }

        alert(`Числа від 1 до 100, квадрат яких не перевищує ${N}: \n${results.join(", ")}`);
    }
}


