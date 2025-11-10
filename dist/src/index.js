"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const merge_1 = require("./merge");
const collection_1 = [9, 7, 5, 3, 1]; // max -> min
const collection_2 = [0, 2, 4, 6, 8]; // min -> max
const collection_3 = [1, 3, 5, 7, 9]; // min -> max
const merged = (0, merge_1.merge)(collection_1, collection_2, collection_3);
console.log("Merged:", merged);
