import Queue from "./queue";

describe("Queue", () => {
  let queue: Queue<string>;
  beforeEach(() => {
    queue = new Queue();
  });
  it("should return undifined when peek is called for the first time", () => {
    expect(queue.peek()).toBe<undefined>(undefined);
  });
  it("should queue and deque", () => {
    queue.enqueue("1");
    expect(queue.peek()!.value).toBe("1");
    queue.enqueue("12");
    expect(queue.peek()!.value).toBe("1");

    expect(queue.deque()).toBe("1");
    expect(queue.deque()).toBe("12");
  });
});
