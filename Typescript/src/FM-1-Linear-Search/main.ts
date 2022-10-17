type searchList = string[] | number[];
type searchElement = string | number;

export default class Search {
  linearSearch(list: searchList, element: searchElement): boolean {
    for (let i = 0; i < list.length; i++) {
      if (list[i] === element) return true;
    }
    return false;
  }

  binarySearch(list: searchList, element: searchElement): boolean | null {
    let low: number = 0;
    let hight: number = list.length;
    while (low < hight) {
      const midPoint = Math.floor(low + (hight - low) / 2);
      const value = list[midPoint];
      if (value === element) return true;
      if (element < value) hight = midPoint;
      if (element > value) low = midPoint + 1;
    }
    return false;
  }
}
