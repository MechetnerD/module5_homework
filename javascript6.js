"use strict";

const arr = [1, 1, 1];
if (arr.length <= 1) {
  console.log("true");
}
for (let i = 1; i < arr.length; i++) {
  if (arr[1] !== arr[0]) {
    console.log("false");
  } else {
    console.log("true");
  }
}