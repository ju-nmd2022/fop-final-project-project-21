let starDisplayed = sessionStorage.getItem("starsCollectedLevel1");
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

const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");

level1.addEventListener("click", () => {
  sessionStorage.setItem("platformArray", "platformArray");
});

level2.addEventListener("click", () => {
  sessionStorage.setItem("platformArray", "platformArrayLevel2");
});

level1.addEventListener("click", () => {
  let platformArray = sessionStorage.getItem("platformArray") || "";
  platformArray = platformArray.replace(" platformArrayLevel2", ""); // remove "platformArrayLevel2" if present
  sessionStorage.setItem("platformArray", platformArray); // add "platformArray"
});

level2.addEventListener("click", () => {
  let platformArray = sessionStorage.getItem("platformArray") || "";
  platformArray = platformArray.replace(" platformArray", ""); // remove "platformArray" if present
  sessionStorage.setItem("platformArray", platformArray); // add "platformArrayLevel2"
});
