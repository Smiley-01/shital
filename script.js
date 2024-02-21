let slideIndex = 0;
let slides = document.querySelectorAll('.slide');
let isPlaying = true;

function showSlide(n) {
    slides.forEach((slide, index) => {
        slide.style.display = "none";
        slide.classList.remove('active');
        if(index === n) {
            slide.style.display = "flex";
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

function prevSlide() {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    showSlide(slideIndex);
}

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

let playPauseBtn = document.querySelector('.pause-play');
playPauseBtn.addEventListener('click', function() {
    isPlaying = !isPlaying;
    playPauseBtn.innerHTML = isPlaying ? "&#10074;&#10074;" : "&#9658;"; 
    if(isPlaying) {
        slideShow = setInterval(nextSlide, 2000);
    } else {
        clearInterval(slideShow);
    }
});

let slideShow = setInterval(nextSlide, 2000);

showSlide(slideIndex); 