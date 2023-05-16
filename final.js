"use strict";
function eventHandler(e) {
  e = e || window.event;
}
//bars變色
var bimgList = [
  "circle_image/circle2.png",
  "circle_image/circle3.png",
  "circle_image/circle4.png",
];
var element = document.getElementsByClassName("bars");
for (var i = 0; i < element.length; i++) {
  element[i].onclick = function (e) {
    var elem = e.target,
      imageIndex = parseInt(elem.dataset.img, 10);
    if (imageIndex <= bimgList.length - 1) {
      elem.src = bimgList[imageIndex++];
      elem.dataset.img = imageIndex;
    } else {
      elem.src = bimgList[0];
      elem.dataset.img = 1;
    }
  };
}
// 讓row移動
// var row = document.getElementsByClassName("row");
// setTimeout(rowMove, 0);
// let rowPosition = 30;
// let rowSpeed = 2;
// function rowMove() {
//   rowPosition -= rowSpeed;
//   //console.log("rowPosition", rowPosition);
//   if (rowPosition <= -50) {
//     rowPosition = 100;
//   }
//   row[0].style.left = `${rowPosition}%`;
//   setTimeout(rowMove, 200);
// }

// 隨機便貓咪顏色
var catList = [
  "cat_image/cat2.png",
  "cat_image/cat3.png",
  "cat_image/cat4.png",
];
var cat = document.getElementsByClassName("role");
setTimeout(changeCat, 200);
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
let cat_position = 0;
let cat_speed = 40;
setTimeout(catMove, 1200);
function catMove() {
  cat_position += cat_speed;

  // 如果位置超過上邊界或下邊界，反轉速度
  if (cat_position >= 200 || cat_position <= 0) {
    cat_speed = -cat_speed;
  }

  // 設定圖片的上邊距
  cat[0].style.top = `${cat_position}px`;
  setTimeout(catMove, 200);
}
