import { merge } from "./merge";

const collection1 = [9, 7, 5, 3, 1];      // max -> min
const collection2 = [0, 2, 4, 6, 8];      // min -> max
const collection3 = [1, 3, 5, 7, 9];      // min -> max

const merged = merge(collection1, collection2, collection3);
console.log("Merged:", merged);
