import eventListeners from './EventListeners.js';
import addTaskToLocalStorage from './setLocalStorage.js';

const addTaskBtn = document.querySelector(".add-task");
const sectionBody = document.querySelector(".section-body-center");
const darkmodeBtn = document.querySelector(".btn.darkmode");

const addTaskFunction = () => {
    addTaskBtn.addEventListener("click", () => {
        const inputTopic = document.querySelector(".input-topic").value;
        const inputText = document.querySelector(".input-text").value;
        const inputTag = document.querySelector(".input-tag").value;
        const lastTime = document.querySelector(".last-time").value;

        if (!inputTopic || !inputText || !inputTag || !lastTime) {
            alert("Lütfen tüm alanları doldurun.");
            return;
        }
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const lastTimeDate = new Date(lastTime);
        lastTimeDate.setHours(0, 0, 0, 0);
        if (lastTimeDate.getTime() < today.getTime()) {
            alert("Geçmiş bir tarih seçemezsiniz.");
            return;
        }
        let newContent = ""
        if (darkmodeBtn.innerHTML === "Dark Mode") {
            newContent += `
                <div class="card" data-topic="${inputTopic}" data-value="${inputTag}">
                    <div class="card-header">
                        <h1 class="card-header-h1">${inputTopic}</h1>
                        <button class="showMore">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="card-description">
                        <p class="card-description-p">${inputText}</p>
                        <h1 class="card-tag">${inputTag}</h1>
                        <h1><span class="Time">Time: ${lastTime}</span></h1>
                        <div class="card-btns">
                            <button class="Listbtn DeleteBtn">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button class="Listbtn UpdateBtn">
                                <i class="fa fa-plus" aria-hidden="true"></i>
                            </button>
                        </div>
                    </div>
                </div>`;
        } else if (darkmodeBtn.innerHTML === "Light Mode") {
            newContent += `
                <div class="card darkmode" data-topic="${inputTopic}" data-value="${inputTag}">
                    <div class="card-header">
                        <h1 class="card-header-h1 darkmode">${inputTopic}</h1>
                        <button class="showMore">
                            <i class="fa fa-arrow-down" aria-hidden="true"></i>
                        </button>
                    </div>
                    <div class="card-description">
                        <p class="card-description-p darkmode">${inputText}</p>
                        <h1 class="card-tag">${inputTag}</h1>
                        <h1><span class="Time darkmode">Time: ${lastTime}</span></h1>
                        <div class="card-btns">
                            <button class="Listbtn DeleteBtn">
                                <i class="fa fa-trash" aria-hidden="true"></i>
                            </button>
                            <button class="Listbtn UpdateBtn">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        </div>
                    </div>
                </div>`;
        }
        sectionBody.innerHTML += newContent;
        eventListeners()
        addTaskToLocalStorage(inputTag, inputText, inputTopic, lastTime);
    })
}


export default addTaskFunction