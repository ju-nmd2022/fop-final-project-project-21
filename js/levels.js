let starsDisplayedLevel1 = sessionStorage.getItem("starsCollectedLevel1");
let starsDisplayedLevel2 = sessionStorage.getItem("starsCollectedLevel2");
let starsDisplayedLevel3 = sessionStorage.getItem("starsCollectedLevel3");
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

if (starsDisplayedLevel1 === null) {
  nullStar.style.display = "block";
} else if (starsDisplayedLevel1 === "1") {
  oneStar.style.display = "block";
} else if (starsDisplayedLevel1 === "2") {
  twoStar.style.display = "block";
} else if (starsDisplayedLevel1 === "3") {
  threeStar.style.display = "block";
}
let win = sessionStorage.getItem("levelsComplete");

if (
  (starsDisplayedLevel2 === "1" && win === "secondLevelComplete") ||
  win === "thirdLevelComplete"
) {
  nullStar2.style.display = "none";
  oneStar2.style.display = "block";
} else if (
  (starsDisplayedLevel2 === "2" && win === "secondLevelComplete") ||
  win === "thirdLevelComplete"
) {
  nullStar2.style.display = "none";
  twoStar2.style.display = "block";
} else if (
  (starsDisplayedLevel2 === "3" && win === "secondLevelComplete") ||
  win === "thirdLevelComplete"
) {
  nullStar2.style.display = "none";
  threeStar2.style.display = "block";
}

if (starsDisplayedLevel3 === "1" && win === "thirdLevelComplete") {
  nullStar3.style.display = "none";
  oneStar3.style.display = "block";
} else if (starsDisplayedLevel3 === "2" && win === "thirdLevelComplete") {
  nullStar3.style.display = "none";
  twoStar3.style.display = "block";
} else if (starsDisplayedLevel3 === "3" && win === "thirdLevelComplete") {
  nullStar3.style.display = "none";
  threeStar3.style.display = "block";
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

// get infromation from playscreen.js wich levels have been passsed
let isLevelComplete = sessionStorage.getItem("levelsComplete");
let levelTwoImageElement = document.getElementById("secondLevelImage");
let levelTreeImageElement = document.getElementById("thirdLevelImage");

if (isLevelComplete === "firstLevelComplete") {
  // display the the second level as open
  levelTwoImageElement.classList.remove("locked");
  level2.classList.remove("lockedTitle");
  level2.addEventListener("click", function () {
    window.location.href = "playscreen.html";
  });
} else if (isLevelComplete === "secondLevelComplete") {
  // keep displaying the second level as open
  levelTwoImageElement.classList.remove("locked");
  level2.classList.remove("lockedTitle");
  levelTreeImageElement.classList.remove("locked");
  level2.addEventListener("click", function () {
    window.location.href = "playscreen.html";
  });

  // display third level as open
  level3.classList.remove("lockedTitle");
  level3.addEventListener("click", function () {
    window.location.href = "playscreen.html";
  });
} else if (isLevelComplete === "thirdLevelComplete") {
  // keep displaying second level as open
  levelTwoImageElement.classList.remove("locked");
  level2.classList.remove("lockedTitle");
  levelTreeImageElement.classList.remove("locked");
  level2.addEventListener("click", function () {
    window.location.href = "playscreen.html";
  });

  // keep displaying third level as open
  level3.classList.remove("lockedTitle");
  level3.addEventListener("click", function () {
    window.location.href = "playscreen.html";
  });

  let comingSoonElement = document.getElementById("coming-soon");
  comingSoonElement.style.visibility = "visible";
}
