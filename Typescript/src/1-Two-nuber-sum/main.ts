// const ARRAY_1 = [3, 5, -4, 8, 11, 1, -1, 6]

class TwoArraySum {
  // time: 0(n^2) 
  // space: 0(1)
  calcNaive(array: number[], target: number): number[] {
    for(let i = 0; i < array.length -1; i++){
      const firstNum = array[i]
      for(let j = i + 1; j < array.length -1; j++){
        const secondNum = array[j]
        if (firstNum + secondNum === target) return [firstNum, secondNum]
      }
    }
    return []
  }
  // time: 0(n) 
  // space: 0(1)
  calcBetter(array: number[], target: number): number[] {
    const saveResult:{ [k: number]: boolean } = {};

    for(let i = 0; i < array.length -1; i++){
      const x = array[i]
      const y = target - x;

      if (saveResult[x]) return [y, x];

      saveResult[y] = true;
    };
    return []
  }

  // time: 0(log(n)) 
  // space: 0(1)
  calc(array: number[], target: number): number[] {
    const sortedArray = array.sort((a, b)=> a - b)
    let left = 0
    let right = array.length -1

    while(left < right){
      const x = sortedArray[left]
      const y = sortedArray[right]

      if (x + y < target) left++
      else if (x + y > target) right--
      else if (x + y === target) return [x, y]
    }
    return []
  }
}
  
export default new TwoArraySum();