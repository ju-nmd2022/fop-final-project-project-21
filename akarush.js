// adding functionality to the photo carousels
// tutorial https://www.youtube.com/watch?v=gBzsE0oieio

// const trackElement = document.getElementById("track");
// const slideElements = Array.from(trackElement.children);

// const previousButtonElement = document.querySelector(".carousel-button-left");
// const nextButtonElement = document.querySelector(".carousel-button-right");

// // getting the width of the slide wich can depend on the width of the window
// // const slideWidth = slideElements[0].getBoundingClientRect().width;
// const slideWidth = 250;

// // positioning the slides next to each other
// const slidePosition = (slideElements, index) => {
//   slideElements.style.left = slideWidth * index + "px";
// };
// slideElements.forEach(slidePosition);

// const moveToSlide = (trackElement, currentSlide, targetSlide) => {
//   trackElement.style.transform = "translateX(-" + targetSlide.style.left + ")";
//   currentSlide.classList.remove("current-slide");
//   targetSlide.classList.add("current-slide");
// };

// // previous button
// previousButtonElement.addEventListener("click", (e) => {
//   const currentSlide = trackElement.querySelector(".current-slide");
//   const previousSlide = currentSlide.previousElementSibling;

//   moveToSlide(trackElement, currentSlide, previousSlide);
// });

// // next button
// nextButtonElement.addEventListener("click", (e) => {
//   const currentSlide = trackElement.querySelector(".current-slide");
//   const nextSlide = currentSlide.nextElementSibling;

//   moveToSlide(trackElement, currentSlide, nextSlide);
// });

////////////////////////////////////////////////

function dispalyingTheImage() {
  i = 0;
  const slideElement = document.getElementById("slide");

  let images = [];
  images[0] = "images/ovve-colours/ovve-colours-01.png";
  images[1] = "images/ovve-colours/ovve-colours-02.png";
  images[2] = "images/ovve-colours/ovve-colours-03.png";
  images[3] = "images/ovve-colours/ovve-colours-04.png";
  images[4] = "images/ovve-colours/ovve-colours-05.png";

  slideElement.src = images[i];

  const leftButtonElement = document.getElementById("left");
  leftButtonElement.addEventListener("click", () => {
    i++;
  });
}

dispalyingTheImage();

// function movingImagesLeft() {
//   i++;
// }

//   leftButtonElement.addEventListener("click");
//   const rightButtonElement = document.getElementById("right");

//   function changeImage() {
//     if (i < images.length - 1) {
//       i++;
//     } else {
//       i = 0;
//     }
//     setTimeout("changeImage()", 3000);
//   }

// });
//   window.onload = changeImage;
moveToSlide(trackElement, currentSlide, nextSlide);

//Choose player name
//Source => https://stackoverflow.com/questions/54270979/javascript-how-to-have-the-name-of-the-players-with-queryselector

var button = document.getElementById("second_button");
var firsttext;
console.log(button);

button.addEventListener("click", function () {
  var player1 = document.getElementById("firsttext");

  if (player1.value != "") {
    firsttext = player1.value;
    alert(firsttext);
    return firsttext;
  } else {
    alert("Enter player's name");
  }
});

var button2 = document.getElementById("second_button2");
var secondtext;
console.log(button2);

button2.addEventListener("click", function () {
  var player2 = document.getElementById("secondtext");

  if (player2.value != "") {
    secondtext = player2.value;
    alert(secondtext);
    return firsttext;
  } else {
    alert("Enter player's name");
  }
});
