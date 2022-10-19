import { shuffleArrayNumber } from "../utils/array-functions";
import { BubbleSort } from "./bubble-sort";

describe("Bubble Sort", () => {
  const list: number[] = [1, 3, 4, 69, 71, 81, 90, 99, 420, 1337, 69420];
  let shuffledList: number[];
  let bubbleSort: BubbleSort;

  beforeEach(() => {
    shuffledList = shuffleArrayNumber(list);
    bubbleSort = new BubbleSort();
  });
  it("should sort an array of number", () => {
    bubbleSort.sort(shuffledList);
    expect(shuffledList).toEqual(list);
  });
});
