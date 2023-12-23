"use strict";

const promptValue = prompt("Enter your age:");

if (!isNaN(+promptValue)) {
  if (promptValue % 2 === 0) {
    console.log("This is even number");
  } else {
    console.log("This is odd number");
  }
} else {
  console.log("Opps, an error has occured");
}
