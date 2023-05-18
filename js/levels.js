let starDisplayed = sessionStorage.getItem("starsCollected");
let nullStar = document.querySelector(".null");
let oneStar = document.querySelector(".one");
let twoStar = document.querySelector(".two");
let threeStar = document.querySelector(".three");

if (starDisplayed === null) {
  nullStar.style.display = "block";
} else if (starDisplayed === "1") {
  //nullStar.style.display = "none";
  oneStar.style.display = "block";
} else if ((starDisplayed = "2")) {
  // nullStar.style.display = "none";
  twoStar.style.display = "block";
} else if ((starDisplayed = "3")) {
  // nullStar.style.display = "none";
  threeStar.style.display = "block";
}
