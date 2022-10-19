import { swap } from "../utils/array-functions";

export class BubbleSort {
  sort(list: number[]) {
    for (let j = 0; j < list.length; ++j) {
      for (let i = 0; i < list.length - 1 - j; ++i) {
        if (list[i] > list[i + 1]) {
          swap(list, i, i + 1);
        }
      }
    }
  }
}
