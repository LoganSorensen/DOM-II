// Your code goes here
const contentImg = document.querySelectorAll(".img-content").forEach(contentImg => {

    contentImg.addEventListener("mouseenter", () => {
        contentImg.style.transform ="scale(1.2)";
        contentImg.style.transition = "ease 3s";
    })

    contentImg.addEventListener("mouseout", () => {
        contentImg.style.transform = "scale(1)";
    })
})

const bottomImg = document.querySelector(".content-destination img");

bottomImg.addEventListener("click", () => {
    bottomImg.style.transform = "scale(0.5)";
})

bottomImg.addEventListener("dblclick", () => {
    bottomImg.style.transform = "scale(1)";
})



// const navImg = document.querySelector("header img");
//     navImg.style.width = "100px";
//     navImg.style.marginTop = "6%";
//     navImg.style.transform = "scaleX(-1)";
//     navImg.addEventListener("scroll", () => {
//         navImg.style.translateX = "200px";
//     })