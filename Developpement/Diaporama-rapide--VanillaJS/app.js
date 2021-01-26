let slideIndex = 1;
showSlides(slideIndex);

function plusSlide(n) {
    showSlides(slideIndex += n)
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let slides = document.getElementsByClassName('slides');
    let dots = document.getElementsByClassName('dot');

    if(n > slides.length) {
        slideIndex = 1;
    }

    if(n < 1) {
        slideIndex = slides.length;
    }

    // On cache toutes les slides
    for(let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    // On retire "active" de tous les dots
    for (let i = 0; i < dots.length; i++) {
        dots[i].classList.remove('active');
    }

    // On affiche la slide demandée
    slides[slideIndex - 1].style.display = 'block';

    // On ajoute "active sur le point cliqué"
    dots[slideIndex - 1].classList.add('active');

}