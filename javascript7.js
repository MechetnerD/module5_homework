"use strict";

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, null, true, "string"];
const result = {
  even: 0,
  odd: 0,
  other: 0,
};

for (const element of numbers) {
  if (typeof element === "number") {
    const type = element % 2 === 0 ? "even" : "odd";

    result[type] += 1;
  } else {
    result.other += 1;
  }
}
console.log(result);