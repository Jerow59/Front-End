'use strict';

/*************************************************************************************************/
/* *********************************** FONCTIONS UTILITAIRES *********************************** */
/*************************************************************************************************/
function getRandomColor()
{
    const red = getRandomInteger(0, 255);
    const blue = getRandomInteger(0, 255);
    const green = getRandomInteger(0, 255);

    const opacity = Math.random();

    return 'rgba('+ red +', '+ blue +', '+ green +', '+ opacity +')';
}

function getRandomInteger(min, max)
{
    // Renvoie un nombre entier aléatoire compris entre les arguments min et max inclus.
    return Math.floor(Math.random() * (max - min + 1)) + min;
}