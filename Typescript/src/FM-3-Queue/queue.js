"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Queue {
    constructor() {
        this.head = this.tail = undefined;
        this.length = 0;
    }
    enqueue(item) {
        const node = { value: item };
        this.length++;
        if (!this.tail) {
            this.head = this.tail = node;
            return;
        }
        const previousTail = this.tail;
        previousTail.next = node;
        this.tail = node;
    }
    deque() {
        if (!this.head)
            return undefined;
        this.length--;
        const head = this.head;
        this.head = this.head.next;
        head.next = undefined;
        return head.value;
    }
    peek() {
        return this.head;
    }
}
exports.default = Queue;
