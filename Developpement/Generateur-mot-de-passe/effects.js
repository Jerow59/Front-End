"use strict";

let btn = document.getElementById("btn");
let alertBox = document.querySelector('.alertBox');
let copyItem = document.querySelector('.copy');

btn.addEventListener("click", getPassword);
copyItem.addEventListener("click", copyPassword);

function getPassword() {
    var chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!@#$%^&*()_+?><:{}[]";
    var passwordLength = 16;
    var password = "";

    for(var i = 0; i < passwordLength; i++) {
        var randomNumber = Math.floor(Math.random() * chars.length);
        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById("password").value = password;
    alertBox.innerHTML = "Nouveau mot de passe copié : <br>" + password;
}

function copyPassword() {
    var copyPassText = document.getElementById("password");
    copyPassText.select();
    copyPassText.setSelectionRange(0,9999);
    document.execCommand("copy");
    alertBox.classList.toggle('active');
    setTimeout(function() {
        alertBox.classList.toggle('active');
    }, 2000)
}