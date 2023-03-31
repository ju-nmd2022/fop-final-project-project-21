// adding functionality to the photo carousels
// tutorial https://www.youtube.com/watch?v=gBzsE0oieio

const trackElement = document.getElementById("track");
const slideElements = Array.from(trackElement.children);

const previousButtonElement = document.querySelector(".carousel-button-left");
const nextButtonElement = document.querySelector(".carousel-button-right");

// getting the width of the slide wich can depend on the width of the window
const slideWidth = slideElements[0].getBoundingClientRect().width;

// positioning the slides next to each other
const slidePosition = (slideElements, index) => {
  slideElements.style.left = slideWidth * index + "px";
};
slideElements.forEach(slidePosition);

const moveToSlide = (trackElement, currentSlide, targetSlide) => {
  trackElement.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

// previous button
previousButtonElement.addEventListener("click", (e) => {
  const currentSlide = trackElement.querySelector(".current-slide");
  const previousSlide = currentSlide.previousElementSibling;

  moveToSlide(trackElement, currentSlide, previousSlide);
});

// next button
nextButtonElement.addEventListener("click", (e) => {
  const currentSlide = trackElement.querySelector(".current-slide");
  const nextSlide = currentSlide.nextElementSibling;

  moveToSlide(trackElement, currentSlide, nextSlide);
});
