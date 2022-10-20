"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TwoCrystalBalls = void 0;
class Search {
    linearSearch(list, element) {
        for (let i = 0; i < list.length; i++) {
            if (list[i] === element)
                return true;
        }
        return false;
    }
    binarySearch(list, element) {
        let low = 0;
        let hight = list.length;
        while (low < hight) {
            const midPoint = Math.floor(low + (hight - low) / 2);
            const value = list[midPoint];
            if (value === element)
                return true;
            if (element < value)
                hight = midPoint;
            if (element > value)
                low = midPoint + 1;
        }
        return false;
    }
}
exports.default = Search;
class TwoCrystalBalls {
    handle(data) {
        const gap = Math.floor(Math.sqrt(data.length));
        let i = gap;
        for (; i < data.length; i += gap) {
            if (data[i]) {
                break;
            }
        }
        i -= gap;
        for (; i < data.length; i++) {
            if (data[i])
                return i;
        }
        return -1;
    }
}
exports.TwoCrystalBalls = TwoCrystalBalls;
