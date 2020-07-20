"use strict";

document.addEventListener("mousemove", e => {
    gsap.to(".imgBox", {
        x : e.clientX,
        y : e.clientY,
        stagger : -0.1
    })
})