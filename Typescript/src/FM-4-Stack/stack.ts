type Node<T> = {
  value: T;
  prev?: Node<T>;
};

export default class Stack<T> {
  private head: Node<T> | undefined;
  public length: number;

  constructor() {
    this.head = undefined;
    this.length = 0;
  }

  push(item: T): void {
    const node = { value: item } as Node<T>;
    this.length++;
    node.prev = this.head;
    this.head = node;
  }

  pop(): Node<T> | undefined {
    this.length = Math.max(0, this.length - 1);
    const popedValue = this.head;

    if (this.length === 0) this.head = undefined;
    else this.head = this.head?.prev;

    return popedValue;
  }

  peek(): Node<T> | undefined {
    return this.head;
  }
}
