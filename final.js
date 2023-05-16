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
    }, 17000);
  };
}

// 隨機便貓咪顏色

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
var index = 2;
setTimeout(checkColor, 1300);
function checkColor() {
  console.log("index", index);
  var score = 0;
  //console.log("index", index);

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
  // console.log(
  //   "cat",
  //   catList.indexOf(
  //     cat[0].src.replace(
  //       "file:///C:/Users/user/OneDrive/%E6%A1%8C%E9%9D%A2/final%20project/",
  //       ""
  //     )
  //   )
  // );

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
    score += 1;
  } else {
    // console.log("failure");
  }
  if (index == 15) index = 0;
  else index += 1;
  setTimeout(checkColor, 2000);
}
