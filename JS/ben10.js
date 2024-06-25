document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const ben10 = document.querySelector(".container img:nth-child(2)");
    const aliens = document.querySelector(".aliens");
    const aliensList = document.querySelectorAll(".aliens .images");
    console.log(aliensList);
    
    ben10.addEventListener("click", () => {
        console.log("Button Clicked");
        wrapper.classList.add("hidden")
        aliens.classList.remove("hidden");
    });

    aliensList.forEach(alien => {
        alien.addEventListener("mouseover", () => {
            alien.querySelector(".description").classList.remove("hidden");
        });
    });

    aliensList.forEach(alien => {
        alien.addEventListener("mouseout", () => {
            alien.querySelector(".description").classList.add("hidden");
        });
    });
});