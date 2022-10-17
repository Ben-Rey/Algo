import Search, { TwoCrystalBalls } from "./main";

describe("Linear Search", () => {
  let search: Search;
  const list = ["1", "2", "3"];

  beforeEach(() => {
    search = new Search();
  });

  it("should return true if a string is found in a list", () => {
    const list = ["1", "2", "3"];
    expect(search.linearSearch(list, "1")).toBe(true);
  });

  it("should return false if a string is not found in a list", () => {
    expect(search.linearSearch(list, "4")).toBe(false);
  });
});

test("linear search array", function () {
  const search = new Search();
  const foo = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  expect(search.linearSearch(foo, 69)).toEqual(true);
  expect(search.linearSearch(foo, 1336)).toEqual(false);
  expect(search.linearSearch(foo, 69420)).toEqual(true);
  expect(search.linearSearch(foo, 69421)).toEqual(false);
  expect(search.linearSearch(foo, 1)).toEqual(true);
  expect(search.linearSearch(foo, 0)).toEqual(false);
});

describe("Binary Search", () => {
  let search: Search;
  const list = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];

  beforeEach(() => {
    search = new Search();
  });

  it("should return false if a string is not found in a list", () => {
    expect(search.binarySearch(list, 10)).toBe(false);
  });

  it("should return true if the value is the middle value", () => {
    expect(search.binarySearch(list, 81)).toBe(true);
  });

  it("should return true if the value is in the array", () => {
    expect(search.binarySearch(list, 1)).toBe(true);
    expect(search.binarySearch(list, 3)).toBe(true);
    expect(search.binarySearch(list, 69)).toBe(true);
    expect(search.binarySearch(list, 71)).toBe(true);
    expect(search.binarySearch(list, 81)).toBe(true);
    expect(search.binarySearch(list, 90)).toBe(true);
    expect(search.binarySearch(list, 99)).toBe(true);
    expect(search.binarySearch(list, 1337)).toBe(true);
    expect(search.binarySearch(list, 69420)).toBe(true);
  });
});

describe("Two cristal ball problem", () => {
  let twoCrystalBalls: TwoCrystalBalls;
  beforeEach(() => {
    twoCrystalBalls = new TwoCrystalBalls();
  });
  it("should do something", () => {
    let idx = Math.floor(Math.random() * 10000);
    const data = new Array(10000).fill(false);

    for (let i = idx; i < 10000; ++i) {
      data[i] = true;
    }

    expect(twoCrystalBalls.handle(new Array(821).fill(false))).toEqual(-1);
    expect(twoCrystalBalls.handle(data)).toEqual(idx);
  });
});
