let starsDesplayedLevel1 = sessionStorage.getItem("starsCollectedLevel1");
let starsDesplayedLevel2 = sessionStorage.getItem("starsCollectedLevel2");
let starsDisplayedLevel3 = sessionStorage.getItem("starsCollectedLevel3");
let starsDisplayedLevel4 = sessionStorage.getItem("starsCollectedLevel4");
let nullStar = document.querySelector(".null");
let oneStar = document.querySelector(".one");
let twoStar = document.querySelector(".two");
let threeStar = document.querySelector(".three");
let nullStar2 = document.querySelector(".null2");
let oneStar2 = document.querySelector(".one2");
let twoStar2 = document.querySelector(".two2");
let threeStar2 = document.querySelector(".three2");
let nullStar3 = document.querySelector(".null3");
let oneStar3 = document.querySelector(".one3");
let twoStar3 = document.querySelector(".two3");
let threeStar3 = document.querySelector(".three3");
let nullStar4 = document.querySelector(".null4");
let oneStar4 = document.querySelector(".one4");
let twoStar4 = document.querySelector(".two4");
let threeStar4 = document.querySelector(".three4");

if (starsDesplayedLevel1 === null) {
  nullStar.style.display = "block";
} else if (starsDesplayedLevel1 === "1") {
  oneStar.style.display = "block";
} else if (starsDesplayedLevel1 === "2") {
  twoStar.style.display = "block";
} else if (starsDesplayedLevel1 === "3") {
  threeStar.style.display = "block";
}

if (starsDesplayedLevel2 === null) {
  nullStar2.style.display = "block";
} else if (starsDesplayedLevel2 === "1") {
  oneStar2.style.display = "block";
} else if (starsDesplayedLevel2 === "2") {
  twoStar2.style.display = "block";
} else if (starsDesplayedLevel2 === "3") {
  threeStar2.style.display = "block";
}

if (starsDisplayedLevel3 === null) {
  nullStar3.style.display = "block";
} else if (starsDesplayedLevel2 === "1") {
  oneStar3.style.display = "block";
} else if (starsDesplayedLevel2 === "2") {
  twoStar3.style.display = "block";
} else if (starsDesplayedLevel2 === "3") {
  threeStar3.style.display = "block";
}

if (starsDisplayedLevel4 === null) {
  nullStar4.style.display = "block";
} else if (starsDesplayedLevel2 === "1") {
  oneStar4.style.display = "block";
} else if ((starsDesplayedLevel2 = "2")) {
  twoStar4.style.display = "block";
} else if ((starsDesplayedLevel2 = "3")) {
  threeStar4.style.display = "block";
}

const level1 = document.getElementById("level1");
const level2 = document.getElementById("level2");
const level3 = document.getElementById("level3");

level1.addEventListener("click", () => {
  sessionStorage.setItem("platformArray", "platformArray");
});

level2.addEventListener("click", () => {
  sessionStorage.setItem("platformArray", "platformArrayLevel2");
});

level3.addEventListener("click", () => {
  sessionStorage.setItem("platformArray", "platformArrayLevel3");
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

level3.addEventListener("click", () => {
  let platformArray = sessionStorage.getItem("platformArray") || "";
  platformArray = platformArray.replace(" platformArray", ""); // remove "platformArray" if present
  sessionStorage.setItem("platformArray", platformArray); // add "platformArrayLevel2"
});
