// Declaring Core Variables

const track = document.getElementById('carouseltrack');
const slides = Array.from(track.children);
const nextButton = document.getElementById('carouselbuttonright');
const prevButton = document.getElementById('carouselbuttonleft');
const index = document.getElementById('carouselindex');
const indexNumbers = Array.from(index.children);

// Getting Slide Width

const slideSize = slides[0].getBoundingClientRect();
const slideWidth = slideSize.width;
console.log(slideWidth);

// Setting the slides
/*
slides[0].style.left = slideWidth * 0 + 'px';
slides[1].style.left = slideWidth * 1 + 'px';
slides[2].style.left = slideWidth * 2 + 'px';
*/

const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}

slides.forEach(setSlidePosition);

function startAutoScroll() {
    autoScrollInterval = setInterval(nextSlide, 5000);
};

function resetAutoScroll() {
    clearInterval(autoScrollInterval);
    startAutoScroll();
};

startAutoScroll();

//Button Funciton
function nextSlide() {
   const currentSlide = track.querySelector('.currentslide');
   const currentIndex = index.querySelector('.currentindex');
   let nextSlide = currentSlide.nextElementSibling;
   let nextIndex = currentIndex.nextElementSibling;
   
   if (!nextSlide) {
      nextSlide = slides[0];
      nextIndex = indexNumbers[0];
   }

   const amountToMove = nextSlide.style.left;
   track.style.transform = 'translateX(-' + amountToMove + ')';
   currentSlide.classList.remove('currentslide');
   nextSlide.classList.add('currentslide');
   currentIndex.classList.remove('currentindex');
   nextIndex.classList.add('currentindex');
   resetAutoScroll();
}

nextButton.onclick = nextSlide

function prevSlide() {
    const currentSlide = track.querySelector('.currentslide');
    const currentIndex = index.querySelector('.currentindex');
    let prevSlide = currentSlide.previousElementSibling;
    let prevIndex = currentIndex.previousElementSibling;

    if (!prevSlide) {
        prevSlide = slides[slides.length - 1];
        prevIndex = indexNumbers[indexNumbers.length - 1];
    }

    const amountToMove = prevSlide.style.left;
    track.style.transform = 'translateX(-' + amountToMove + ')';
    currentSlide.classList.remove('currentslide');
    prevSlide.classList.add('currentslide');
    currentIndex.classList.remove('currentindex');
    prevIndex.classList.add('currentindex');
    resetAutoScroll();
}

prevButton.onclick = prevSlide

/* Buttons */

const downloadCV = document.getElementsByClassName('CVcenter')[0];

function buttonHoverPrev() {
   prevButton.style.color = 'white';
};

prevButton.onmouseover = buttonHoverPrev;

function buttonLeavePrev() {
    prevButton.style.color = 'black';
};

prevButton.onmouseleave = buttonLeavePrev;

function buttonHoverNext() {
    nextButton.style.color = 'white';
 };
 
 nextButton.onmouseover = buttonHoverNext;
 
 function buttonLeaveNext() {
     nextButton.style.color = 'black';
 };
 
 nextButton.onmouseleave = buttonLeaveNext;

 function downloadCVHover() {
    Element.style.cursor = 'pointer';
 };

 downloadCV.onmouseover = downloadCVHover;