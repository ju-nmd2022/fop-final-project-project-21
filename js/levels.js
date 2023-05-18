let starDisplayed = sessionStorage.getItem("starsCollected");
let nullStar = document.querySelector(".null");
let oneStar = document.querySelector(".one");
let twoStar = document.querySelector(".two");
let threeStar = document.querySelector(".three");

if (starDisplayed === null) {
  nullStar.style.display = "block";
} else if (starDisplayed === "1") {
  oneStar.style.display = "block";
} else if ((starDisplayed = "2")) {
  twoStar.style.display = "block";
} else if ((starDisplayed = "3")) {
  threeStar.style.display = "block";
}
