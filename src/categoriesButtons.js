
const categoriesButtons = () => {
    const sectionBody = document.querySelector(".section-body-center");
    const categoriesBtn = document.querySelectorAll(".categories-btn");
    categoriesBtn.forEach(btn => {
        btn.addEventListener("click", () => {
            const btnName = btn.innerHTML.toLowerCase();
            let cards = sectionBody.querySelectorAll(".card");
            cards.forEach(card => {
                card.style.display = "none";
                if (card.dataset.value.toLowerCase() === btnName) {
                    card.style.display = "block";
                }
            });
        });
    });
    const btnToday = document.querySelector(".btn-today");
    btnToday.addEventListener("click", () => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        const month = today.getMonth() + 1 < 10 ? '0' + (today.getMonth() + 1) : today.getMonth() + 1;
        const day = today.getDate() < 10 ? '0' + today.getDate() : today.getDate();
        const todayFormatted = today.getFullYear() + '-' + month + '-' + day;

        let cards = document.querySelectorAll(".section-body-center .card");
        cards.forEach(card => {
            let lastTimeElement = card.querySelector(".Time");
            const lastTimeValue = new Date(lastTimeElement.textContent).setHours(0, 0, 0, 0);

            if (new Date(lastTimeValue).toDateString() === new Date(todayFormatted).toDateString()) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
    const allTasksBtn = document.querySelector(".allTasks");
    allTasksBtn.addEventListener("click", () => {
        const myData = JSON.parse(localStorage.getItem("tasks"));
        if (myData) {
            const sectionBody = document.querySelector(".section-body-center");
            let newContent = "";
            myData.forEach((data) => {
                newContent += `
                  <div class="card" data-topic="${data.inputTopic}" data-value ="${data.inputTag}">
                  <div class="card-header">
                      <h1 class="card-header-h1">${data.inputTopic}</h1>
                      <button class="showMore">
                      <i class="fa fa-arrow-down" aria-hidden="true"></i>
          </button>
                  </div>
                  <div class="card-description">
                      <p class="card-description-p">${data.inputText}</p>
                  <h1 class="card-tag">${data.inputTag}</h1>
                      <h1>Time: <span class="Time">${data.lastTime}</span></h1>
                      <div class="card-btns">
                          <button class="Listbtn DeleteBtn"><i class="fa fa-trash"
                                  aria-hidden="true"></i></button>
                      </div>
                  </div>
              </div>
                  `;
            });
            sectionBody.innerHTML = newContent;
        }

    })
    const leaveBtn = document.querySelector(".leave");
    leaveBtn.addEventListener("click", () => {
        window.close();
    })

}
export default categoriesButtons;
