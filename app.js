import addTaskFunction from "./src/addTask.js";
import categoriesButtons from "./src/categoriesButtons.js";
import eventListeners from "./src/EventListeners.js";
import { loadTasksFromLocalStorage } from "./src/loadTaskToStorage.js";
import darkMode from "./src/darkMode.js";

document.addEventListener('DOMContentLoaded', () => {
    addTaskFunction();
    loadTasksFromLocalStorage();
    eventListeners()
    categoriesButtons();
    darkMode();
});

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
document.querySelector(".logo").addEventListener("mouseover", (event) => {
    let repetition = 0;
    const interval = setInterval(() => {
        event.target.innerText = event.target.innerText.split("").map((letter, index) => {
            if (index < repetition) {
                return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
        }).join("");
        if (repetition >= event.target.dataset.value.length) {
            clearInterval(interval);
            document.querySelector(".logo").innerHTML = "Taha Karakoç";
        }
        repetition++;
    }, 30);
});



