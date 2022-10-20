"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BubbleSort = void 0;
const array_functions_1 = require("../utils/array-functions");
class BubbleSort {
    sort(list) {
        for (let j = 0; j < list.length; ++j) {
            for (let i = 0; i < list.length - 1 - j; ++i) {
                if (list[i] > list[i + 1]) {
                    (0, array_functions_1.swap)(list, i, i + 1);
                }
            }
        }
    }
}
exports.BubbleSort = BubbleSort;
