

export const loadTasksFromLocalStorage = () => {

    const myData = JSON.parse(localStorage.getItem("tasks"));
    if (myData) {
        const sectionBody = document.querySelector(".section-body-center");
        let newContent = "";
        myData.forEach((data) => {
            newContent += `
              <div class="card" data-topic="${data.inputTopic}" data-value ="${data.inputTag}">
              <div class="card-header">
                  <h1 class="card-header-h1 ">${data.inputTopic}</h1>
                  <button class="showMore">
                  <i class="fa fa-arrow-down" aria-hidden="true"></i>
      </button>
              </div>
              <div class="card-description">
                  <p class="card-description-p ">${data.inputText}</p>
              <h1 class="card-tag ">${data.inputTag}</h1>
                  <h1><span class="Time ">Time: ${data.lastTime}</span></h1>
                  <div class="card-btns">
                      <button class="Listbtn DeleteBtn"><i class="fa fa-trash"
                              aria-hidden="true"></i></button>
                              <button class="Listbtn UpdateBtn">
                              <i class="fa fa-plus" aria-hidden="true"></i>
                          </button>
                  </div>
              </div>
          </div>
              `;
        });
        sectionBody.innerHTML = newContent;
    }
};
