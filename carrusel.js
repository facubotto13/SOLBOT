let slideIndex = 0;
showSlides(slideIndex); // Mostrar el primer slide al cargar la página

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function showSlides(n) {
    const slides = document.querySelectorAll('.proyecto-1');
    if (n >= slides.length) { slideIndex = 0; }
    if (n < 0) { slideIndex = slides.length - 1; }
    slides.forEach(slide => slide.style.display = "none");
    slides[slideIndex].style.display = "block";
}