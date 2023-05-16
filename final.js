"use strict";
function eventHandler(e) {
  e = e || window.event;
}
//bars變色
var colorList = [
  "circle_image/circle2.png",
  "circle_image/circle3.png",
  "circle_image/circle4.png",
];
var originColor = ["circle_image/circle1.png"];
var element = document.getElementsByClassName("bars");
for (var i = 0; i < element.length; i++) {
  element[i].onclick = function (e) {
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
    }, 17000);
  };
}

// 隨機便貓咪顏色
var catList = [
  "cat_image/cat2.png",
  "cat_image/cat3.png",
  "cat_image/cat4.png",
];
var cat = document.getElementsByClassName("role");
setTimeout(changeCat, 1100);
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function changeCat() {
  var num = getRandomInt(3);
  cat[0].src = catList[num];
  cat[0].dataset.img = num;
  setTimeout(changeCat, 2000);
}

// 更改貓咪位置
// let cat_position = 0;
// let cat_speed = 40;
// setTimeout(catMove, 1200);
// function catMove() {
//   cat_position += cat_speed;

//   // 如果位置超過上邊界或下邊界，反轉速度
//   if (cat_position >= 200 || cat_position <= 0) {
//     cat_speed = -cat_speed;
//   }

//   // 設定圖片的上邊距
//   cat[0].style.top = `${cat_position}px`;
//   setTimeout(catMove, 200);
// }

// 判斷是否為同一個顏色
