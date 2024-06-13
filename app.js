let intro = document.querySelector('.inicioPanel');
let logo = document.querySelector('.logo-header');
let logoSpan = document.querySelectorAll('.logo1');


window.addEventListener('DOMContentLoaded', () => {
    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.add('active');
            }, (idx + 1) * 500);
        });
    });

    setTimeout(() => {
        logoSpan.forEach((span, idx) => {
            setTimeout(() => {
                span.classList.remove('active');
                span.classList.add('fade');
            }, (idx + 1) * 800);
        });
    }, 2000);

    setTimeout(() => {
        intro.style.top = "-100vh";
        // Scroll to the top of the page
        window.scrollTo(0, 0);
    }, 3000);
});
