import Stack from "./stack";

describe("Stack", () => {
  let stack: Stack<string>;

  beforeEach(() => {
    stack = new Stack();
  });
  it("should return undifined if nothing in the stack", () => {
    expect(stack.peek()).toBeUndefined();
  });

  it("should add element to the stack the stack", () => {
    stack.push("1");
    expect(stack.peek()?.value).toBe("1");
    stack.push("2");
    expect(stack.peek()?.value).toBe("2");
    expect(stack.peek()?.prev?.value).toBe("1");
    stack.push("10");
    expect(stack.peek()?.value).toBe("10");
    expect(stack.peek()?.prev?.value).toBe("2");
    stack.push("Yoyo");
    expect(stack.peek()?.value).toBe("Yoyo");
    expect(stack.peek()?.prev?.value).toBe("10");
  });

  it("should remove the last element inserted when pop is called", () => {
    stack.push("1");
    expect(stack.length).toBe(1);
    expect(stack.peek()?.value).toBe("1");
    stack.push("2");
    expect(stack.length).toBe(2);
    expect(stack.peek()?.value).toBe("2");
    expect(stack.peek()?.prev?.value).toBe("1");
    stack.push("10");
    expect(stack.length).toBe(3);
    expect(stack.peek()?.value).toBe("10");
    expect(stack.peek()?.prev?.value).toBe("2");
    stack.push("Yoyo");
    expect(stack.length).toBe(4);
    expect(stack.peek()?.value).toBe("Yoyo");
    expect(stack.peek()?.prev?.value).toBe("10");

    let result;
    result = stack.pop();
    expect(stack.length).toBe(3);
    expect(result?.value).toBe("Yoyo");
    expect(stack.peek()?.value).toBe("10");
    expect(stack.peek()?.prev?.value).toBe("2");
    result = stack.pop();
    expect(stack.length).toBe(2);
    expect(result?.value).toBe("10");
    expect(stack.peek()?.value).toBe("2");
    expect(stack.peek()?.prev?.value).toBe("1");
    result = stack.pop();
    expect(stack.length).toBe(1);
    expect(result?.value).toBe("2");
    expect(stack.peek()?.value).toBe("1");
    expect(stack.peek()?.prev?.value).toBeUndefined();
    result = stack.pop();
    expect(stack.length).toBe(0);
    expect(result?.value).toBe("1");
    expect(stack.peek()).toBeUndefined();
  });
});
