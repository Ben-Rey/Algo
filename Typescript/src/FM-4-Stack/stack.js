"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Stack {
    constructor() {
        this.head = undefined;
        this.length = 0;
    }
    push(item) {
        const node = { value: item };
        this.length++;
        node.prev = this.head;
        this.head = node;
    }
    pop() {
        var _a;
        this.length = Math.max(0, this.length - 1);
        const popedValue = this.head;
        if (this.length === 0)
            this.head = undefined;
        else
            this.head = (_a = this.head) === null || _a === void 0 ? void 0 : _a.prev;
        return popedValue;
    }
    peek() {
        return this.head;
    }
}
exports.default = Stack;
