"use strict";

let box = document.querySelector('.box');
window.onmousemove = function(e) {
    let x = e.clientX/5;
    box.style.transform = "perspective(1000px) rotateY(" + x + "deg)";
};