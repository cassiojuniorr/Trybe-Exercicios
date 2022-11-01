"use strict";
function myFylter(item) {
    item.filter((elm) => elm === item[elm]);
}
const array = [1, 2, 3, 4];
console.log(myFylter(array));
