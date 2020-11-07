"use strict";

window.addEventListener('load', () => {
    let long;
    let lat;

    let temperatureDescription = document.querySelector('.temperature-description');
    let temperatureDegree = document.querySelector('.temperature-degree');
    let locationTimezone = document.querySelector('.location-timezone');
    let temperatureSection = document.querySelector('.temperature');
    const temperatureSpan = document.querySelector('.temperature span');

    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = 'https://cors-anywhere.herokuapp.com/';
            const api = `${proxy}https://api.darksky.net/forecast/fd9d9c6418c23d94745b836767721ad1/${lat},${long}`;

            fetch(api)
                .then(response => {
                return response.json();
            })
                .then(data => {
                console.log(data);
                const {temperature, summary, icon} = data.currently;
                // On met à jour les elements du DOM depuis l'API
                temperatureDegree.textContent =  temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                // Formule de conversion farenhait / celsius
                let celsius = (temperature - 32) * (5 / 9);
                // On met à jour l'icone
                setIcon(icon, document.querySelector('.icon'));

                // On change la temperature de farenheit à celsius et inversement
                temperatureSection.addEventListener('click', () => {
                    if(temperatureSpan.textContent === "F") {
                        temperatureSpan.textContent = 'C';
                        temperatureDegree.textContent = Math.floor(celsius);
                    } else {
                        temperatureSpan.textContent = "F";
                        temperatureDegree.textContent = temperature;
                    }
                })
            });
        });

    } else {
        h1.textContent = "Vous devez autoriser la localisation pour pouvoir afficher votre météo."
    };

    function setIcon(icon, iconID) {
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }

});