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

const headerImg = document.querySelector(".intro img");

headerImg.addEventListener("wheel", (event) => {
    let scale = 1;
    event.preventDefault();

    scale += event.deltaY * -0.01;
    scale = Math.min(Math.max(.5, scale), 1);

    headerImg.style.transform = `scale(${scale})`;
})

document.addEventListener("keydown", () => {
    alert("What could you possibly be trying to type?");
})

const text = document.querySelector("p");

text.addEventListener("copy", () => {
    console.log("Copied text");
})

window.addEventListener("load", () => {
    console.log("This page has finished loading");
})

document.addEventListener("contextmenu", () => {
    console.log("Context menu opened");
})

const img = document.querySelectorAll("img").forEach(img => {
    img.addEventListener("drag", () => {
        console.log("Dragging");
    })
})

// const body = document.querySelector("body");

// body.addEventListener("resize", () => {
//     body.style.backgroundColor = red;
// })



// const navImg = document.querySelector("header img");
//     navImg.style.width = "100px";
//     navImg.style.marginTop = "6%";
//     navImg.style.transform = "scaleX(-1)";
//     navImg.addEventListener("scroll", () => {
//         navImg.style.translateX = "200px";
//     })

// 1.mouseenter
// 2.mouseout
// 3.click
// 4.dblclick
// 5.wheel
// 6.keydown
// 7.copy
// 8.load
// 9.contextmenu
// 10.drag