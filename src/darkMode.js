const darkMode = () => {
    const darkmodeBtn = document.querySelector(".btn.darkmode");
    const body = document.querySelector(".body");
    const leftBar = document.querySelector(".leftbar");
    const h1s = document.querySelectorAll(".h1");
    const icons = document.querySelectorAll(".fa");
    const bar = document.querySelector(".bar");
    const listCenter = document.querySelector(".list-center");
    const card = document.querySelectorAll(".card");
    const cardh1 = document.querySelectorAll(".card-header-h1");
    const carddesc = document.querySelectorAll(".card-description-p");
    const cardTag = document.querySelectorAll(".card-tag");
    const rightBar = document.querySelector(".rightbar");
    const time = document.querySelectorAll("Time");


    darkmodeBtn.addEventListener("click", () => {
        darkmodeBtn.innerHTML = darkmodeBtn.innerHTML === "Dark Mode" ? "Light Mode" : "Dark Mode";

        body.classList.toggle("darkmode");
        leftBar.classList.toggle("darkmode", body.classList.contains("darkmode"));
        h1s.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        });

        listCenter.classList.toggle("darkmode", body.classList.contains("darkmode"));
        card.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        })
        cardh1.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        })
        carddesc.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        })
        cardTag.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        })
        rightBar.classList.toggle("darkmode", body.classList.contains("darkmode"));
        time.forEach(item => {
            item.classList.toggle("darkmode", body.classList.contains("darkmode"));
        })
    });


}

export default darkMode