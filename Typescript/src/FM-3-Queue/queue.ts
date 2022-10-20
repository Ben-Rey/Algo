type Node<T> = {
  value: T;
  next?: Node<T>;
};

export default class Queue<T> {
  public length: number;
  private head: Node<T> | undefined;
  private tail: Node<T> | undefined;

  constructor() {
    this.head = this.tail = undefined;
    this.length = 0;
  }

  enqueue(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    if (!this.tail) {
      this.head = this.tail = node;
      return;
    }
    const previousTail = this.tail;
    previousTail.next = node;
    this.tail = node;
  }

  deque(): T | undefined {
    if (!this.head) return undefined;
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
