document.addEventListener("DOMContentLoaded", () => {
    const wrapper = document.querySelector(".wrapper");
    const ben10 = document.querySelector(".container img:nth-child(2)");
    const aliens = document.querySelector(".aliens");
    const aliensList = document.querySelectorAll(".aliens .images");
    
    const spreadButton = document.querySelector(".aliens .footer");
    
    const homeButton = document.querySelector(".aliens .home");


    function switchTabs(){
        wrapper.classList.toggle("hidden");
        aliens.classList.toggle("hidden");
    }

    spreadButton.addEventListener('click', () => {
        aliensList.forEach(alien => alien.classList.toggle("stacked"));
    });

    homeButton.addEventListener("click", () => {
        aliensList.forEach(alien => alien.classList.add("stacked"));
        switchTabs();
    });

    ben10.addEventListener("click", () => {
        console.log("Button Clicked");
        switchTabs();
    });


    for (let i = 0; i < aliensList.length; i++) {
        aliensList[i].addEventListener("mouseover", () => {

            aliensList[i].querySelector(".description").classList.remove("hidden");
            aliensList[i].style.top = `5vh`;
            let t = 0;
            aliensList[0].style.backgroundColor = `rgba(245, 245, 191, 1)`;
            aliensList[0].style.border = `1px solid rgb(196, 196, 9)`;
            for (let j = 1; j < i; j++){
                aliensList[j].style.top = `calc(20% - ((20% - 10vh)/${i}) * ${j})`;
                aliensList[j].style.backgroundColor = `rgba(245, 245, 191, 1)`;
                aliensList[j].style.border = `1px solid rgb(196, 196, 9)`;
                /*aliensList[j].style["height"] = "70vh";*/
                
                //aliensList[j].style["top"]="calc(20% - ((20% - 20vh)/i) * j)";
            }
            aliensList[i].style.border = `1px solid rgb(196, 196, 9)`;
            aliensList[i].style.backgroundColor = `rgba(245, 245, 191, 1)`;
            aliensList[i].style.zIndex = "10";
            t = 9;
            for (let j = i + 1; j < aliensList.length - 1; j++){
                
                aliensList[j].style.top = `calc(10vh + ((20% - 10vh) / (${aliensList.length} - 1 - ${i})) * (${j} - ${i}))`; 
                aliensList[j].style.zIndex = "" + t;
                t--;
                aliensList[j].style.backgroundColor = `rgba(245, 245, 191, 1)`;
                aliensList[j].style.border = `1px solid rgb(196, 196, 9)`;
            }
            aliensList[aliensList.length - 1].style.backgroundColor = `rgba(245, 245, 191, 1)`;
            aliensList[aliensList.length - 1].style.border = `1px solid rgb(196, 196, 9)`;
        });
        aliensList[i].addEventListener("mouseout", () => {
            aliensList[i].querySelector(".description").classList.add("hidden");
            for (let j = 0; j < aliensList.length; j++){
                aliensList[j].style.top = "20%";
                aliensList[j].style.zIndex = "0";
                //aliensList[j].style.backgroundColor = "transparent";
                //aliensList[j].style.border = `0px`;
            }
        });
    }
});