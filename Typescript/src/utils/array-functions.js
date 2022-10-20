"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.swap = exports.shuffleArrayNumber = void 0;
function shuffleArrayNumber(array) {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        const temp = newArray[i];
        newArray[i] = newArray[j];
        newArray[j] = temp;
    }
    return newArray;
}
exports.shuffleArrayNumber = shuffleArrayNumber;
function swap(list, firstIndex, secondIndex) {
    [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
}
exports.swap = swap;
