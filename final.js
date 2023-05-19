"use strict";
//bars變色
var colorList = [
  "circle_image/circle2.png",
  "circle_image/circle3.png",
  "circle_image/circle4.png",
];
var originColor = ["circle_image/circle1.png"];
var elements = document.getElementsByClassName("bars");
var catList = [
  "cat_image/cat2.png",
  "cat_image/cat3.png",
  "cat_image/cat4.png",
];
var cat = document.getElementsByClassName("role");

// 點選bars讓bars變色
for (var i = 0; i < elements.length; i++) {
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
var index = 11;
const score = document.getElementsByClassName("score");
let scoreInJs = 0;
setTimeout(checkColor, 1400);
function checkColor() {
  console.log("index", index);
  const target = [...elements].filter(function (element) {
    return element.x === 40 + index * 230;
  });
  console.log(
    "color",
    colorList.indexOf(
      target[0].src.replace(
        "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
        ""
      )
    )
  );
  if (
    colorList.indexOf(
      target[0].src.replace(
        "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
        ""
      )
    ) ==
    catList.indexOf(
      cat[0].src.replace(
        "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
        ""
      )
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
