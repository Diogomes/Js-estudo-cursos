"use strict";
// Intersections
const productId = false;
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 1] = "Up";
    Direction[Direction["Down"] = 2] = "Down";
    Direction["Left"] = "Esquerda";
})(Direction || (Direction = {}));
const direction = Direction.Left;
// Type Assertions
const productName = "Boné";
let itemId = productName;
