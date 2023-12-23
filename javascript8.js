"use strict";

const myMap = new Map([
  ["apple", "green"],
  ["cherry", "red"],
  ["banana", "yellow"],
  ["blueberry", "blue"],
]);

const keys = Array.from(myMap.keys());
keys.forEach((key) => {
  console.log(`Ключ - ${key}, значение - ${myMap.get(key)}`);
});
