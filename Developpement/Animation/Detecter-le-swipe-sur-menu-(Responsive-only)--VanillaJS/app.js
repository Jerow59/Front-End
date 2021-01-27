"use strict";

const icon = document.querySelector('.hamburger');
const sidebar = document.querySelector('.sidebar');

let touchStart, touchEnd;

// Clic
icon.addEventListener('click', () => {
    sidebar.classList.add('open');
})

// TouchStart
sidebar.addEventListener('touchstart', e => {
    touchStart = e.targetTouches[0].clientX;
});

// TouchMove
sidebar.addEventListener('touchmove', e => {
    touchEnd = e.targetTouches[0].clientX;
});

// Distance ?
sidebar.addEventListener('touchend', e => {
    if(touchStart - touchEnd > 100) {
        sidebar.classList.remove('open');
    }
})