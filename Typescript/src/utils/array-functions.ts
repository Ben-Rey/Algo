export function shuffleArrayNumber(array: number[]): number[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = newArray[i];
    newArray[i] = newArray[j];
    newArray[j] = temp;
  }
  return newArray;
}

export function swap(list: number[], firstIndex: number, secondIndex: number) {
  [list[firstIndex], list[secondIndex]] = [list[secondIndex], list[firstIndex]];
}
