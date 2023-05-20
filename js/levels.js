let starsDesplayedLevel1 = sessionStorage.getItem("starsCollectedLevel1");
let starsDesplayedLevel2 = sessionStorage.getItem("starsCollectedLevel2");
let nullStar = document.querySelector(".null");
let oneStar = document.querySelector(".one");
let twoStar = document.querySelector(".two");
let threeStar = document.querySelector(".three");
let nullStar2 = document.querySelector(".null2");
let oneStar2 = document.querySelector(".one2");
let twoStar2 = document.querySelector(".two2");
let threeStar2 = document.querySelector(".three2");

if (starsDesplayedLevel1 === null) {
  nullStar.style.display = "block";
} else if (starsDesplayedLevel1 === "1") {
  oneStar.style.display = "block";
} else if ((starsDesplayedLevel1 = "2")) {
  twoStar.style.display = "block";
} else if ((starsDesplayedLevel1 = "3")) {
  threeStar.style.display = "block";
}

if (starsDesplayedLevel2 === null) {
  nullStar2.style.display = "block";
} else if (starsDesplayedLevel2 === "1") {
  oneStar2.style.display = "block";
} else if ((starsDesplayedLevel2 = "2")) {
  twoStar2.style.display = "block";
} else if ((starsDesplayedLevel2 = "3")) {
  threeStar2.style.display = "block";
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
