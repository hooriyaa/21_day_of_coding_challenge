"use strict";
// QUESTION 61:
var vehiclesCategories;
(function (vehiclesCategories) {
    vehiclesCategories[vehiclesCategories["car"] = 0] = "car";
    vehiclesCategories[vehiclesCategories["trucks"] = 1] = "trucks";
    vehiclesCategories[vehiclesCategories["motorcycles"] = 2] = "motorcycles";
})(vehiclesCategories || (vehiclesCategories = {}));
console.log(vehiclesCategories.motorcycles);
let studentsData = {
    name: "hooriya",
    age: 17,
    courses: ["english", "physics", "chemistry", "computer"]
};
console.log(studentsData);
let circle = {
    kind: "circle",
    diameter: 24,
    radius: 12
};
let rectangle = {
    kind: "rectangle",
    height: 7,
    widht: 4,
};
console.log(circle);
console.log(rectangle);
