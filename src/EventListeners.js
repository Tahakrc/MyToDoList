
const eventListeners = () => {
    document.querySelectorAll(".showMore").forEach((button) => {
        button.addEventListener("click", (event) => {
            const cardDescContainer = event.target
                .closest(".card")
                .querySelector(".card-description");
            if (cardDescContainer.style.display === "none") {
                button.innerHTML = `
                <button class="showMore">
                <i class="fa fa-arrow-up" aria-hidden="true"></i>
    </button>`
                cardDescContainer.style.transform = 'scale(1)';
                cardDescContainer.style.display = "block";
            } else {
                button.innerHTML = `
                <button class="showMore">
                <i class="fa fa-arrow-down" aria-hidden="true"></i>
    </button>`
                cardDescContainer.style.display = "none";
            }
        });
    });

    const deleteBtns = document.querySelectorAll(".DeleteBtn");
    deleteBtns.forEach((deleteBtn) => {
        deleteBtn.addEventListener("click", () => {
            const cardContainer = deleteBtn.closest(".card");
            if (cardContainer) {
                const cardTopic = cardContainer.getAttribute("data-topic");
                const tasks = JSON.parse(localStorage.getItem("tasks"));
                if (tasks && tasks.length >= 0) {
                    const updatedTasks = tasks.filter(
                        (task) => task.inputTopic !== cardTopic
                    );
                    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                }
                cardContainer.classList.add('fade-out');
                cardContainer.addEventListener('animationend', () => {
                    cardContainer.remove();
                    const task2 = JSON.parse(localStorage.getItem("tasks")).filter(
                        (task) => task.inputTopic !== cardTopic
                    );
                    localStorage.setItem("tasks", JSON.stringify(task2));
                });
            }
        });
    });


    const updateBtns = document.querySelectorAll(".UpdateBtn");
    const modal = document.querySelector(".modal");
    const closeModalIcon = modal.querySelector(".fa-times");
    const updateModalBtn = modal.querySelector(".modal-update-task");
    const main = document.querySelector(".main");

    closeModalIcon.addEventListener("click", () => {
        modal.style.display = "none";
    });


    updateBtns.forEach((updateBtn) => {
        updateBtn.addEventListener("click", () => {
            const chooseCard = updateBtn.closest(".card");
            const inputTopic = chooseCard.getAttribute('data-topic');
            const inputTag = chooseCard.getAttribute('data-value');
            const inputText = chooseCard.querySelector(".card-description-p").textContent;
            const lastTime = chooseCard.querySelector(".Time").textContent.split(": ")[1];
            main.style.opacity = 0.2
            modal.style.display = "block";
            modal.querySelector(".modal-input-topic").value = inputTopic;
            modal.querySelector(".modal-input-tag").value = inputTag;
            modal.querySelector(".modal-input-text").value = inputText;
            modal.querySelector(".modal-last-time").value = lastTime;

            updateModalBtn.addEventListener("click", () => {
                const updatedTopic = modal.querySelector(".modal-input-topic").value;
                const updatedTag = modal.querySelector(".modal-input-tag").value;
                const updatedText = modal.querySelector(".modal-input-text").value;
                const updatedLastTime = modal.querySelector(".modal-last-time").value;

                chooseCard.setAttribute('data-topic', updatedTopic);
                chooseCard.setAttribute('data-value', updatedTag);
                chooseCard.querySelector(".card-header-h1").textContent = updatedTopic;
                chooseCard.querySelector(".card-description-p").textContent = updatedText;
                chooseCard.querySelector(".card-tag").textContent = updatedTag;
                chooseCard.querySelector(".Time").textContent = "Time: " + updatedLastTime;

                const tasks = JSON.parse(localStorage.getItem("tasks"));
                const updatedTasks = tasks.map(task => {
                    if (task.inputTopic === inputTopic) {
                        return {
                            ...task,
                            inputTopic: updatedTopic,
                            inputTag: updatedTag,
                            inputText: updatedText,
                            lastTime: updatedLastTime
                        };
                    }
                    return task;
                });
                localStorage.setItem("tasks", JSON.stringify(updatedTasks));
                modal.style.display = "none";
                main.style.opacity = 1
            });
        });
    });
};
export default eventListeners;
