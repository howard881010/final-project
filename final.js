"use strict";
//bars變色
const colorList = [
  "circle_image/circle2.png",
  "circle_image/circle3.png",
  "circle_image/circle4.png",
];
const originColor = ["circle_image/circle1.png"];
const elements = document.getElementsByClassName("bars");
const catList = [
  "cat_image/cat2.png",
  "cat_image/cat3.png",
  "cat_image/cat4.png",
];

const cat = document.getElementsByClassName("role");
const startPage = document.getElementById("start-page");
const gamePage = document.getElementById("game-page");
const startButton = document.getElementById("start-button");
const score = document.getElementsByClassName("score");

startButton.onclick = startGame;

function startGame() {
  startPage.style.display = "none";
  gamePage.style.display = "block";
  console.log("遊戲開始了");
  console.log("elements", elements);
  //點選bars讓bars變色;
  for (let i = 0; i < elements.length; i++) {
    elements[i].onclick = function (e) {
      var elem = e.target,
        imageIndex = parseInt(elem.dataset.img, 10);
      if (imageIndex <= colorList.length - 1) {
        elem.src = colorList[imageIndex++];
        elem.dataset.img = imageIndex;
      } else {
        elem.src = colorList[0];
        elem.dataset.img = 1;
      }
      // 隔一段時間讓bars回復原來的顏色
      setTimeout(function () {
        elem.src = originColor[0];
        elem.dataset.img = 0;
      }, 20400);
    };
  }

  // 隨機便貓咪顏色
  const sliceSrc = (src, num) => {
    return src.slice(src.length - num);
  };

  setTimeout(changeCat, 1500);
  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

  function changeCat() {
    var num = getRandomInt(3);
    cat[0].src = catList[num];
    cat[0].dataset.img = num;
    setTimeout(changeCat, 2400);
  }

  // 判斷是否為同一個顏色
  let index = 11;
  let scoreInJs = 0;
  setTimeout(checkColor, 1400);
  function checkColor() {
    console.log("index", index);
    const target = [...elements].filter(function (element) {
      return element.dataset.key === index.toString();
    });
    // console.log(
    //   "color",
    //   colorList.indexOf(
    //     target[0].src.replace(
    //       "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
    //       ""
    //     )
    //   )
    // );
    if (
      colorList.indexOf(
        sliceSrc(target[0].src, 24)
        // target[0].src.replace(
        //   "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
        //   ""
        // )
      ) ==
      catList.indexOf(
        sliceSrc(cat[0].src, 18)
        // cat[0].src.replace(
        //   "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
        //   ""
        // )
      )
    ) {
      scoreInJs++;
      score[0].textContent = scoreInJs;
    } else {
      console.log("failure");
    }
    console.log("scoreInJs", scoreInJs);
    if (index == 15) index = 0;
    else index += 1;
    setTimeout(checkColor, 2400);
  }
}
