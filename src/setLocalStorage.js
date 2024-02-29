const addTaskToLocalStorage = (inputTag, inputText, inputTopic, lastTime) => {
    let tasks;
    if (localStorage.getItem("tasks") === null) {
        tasks = [];
    } else {
        tasks = JSON.parse(localStorage.getItem("tasks"));
    }
    tasks.push({ inputTopic, inputTag, inputText, lastTime });
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

export default addTaskToLocalStorage;