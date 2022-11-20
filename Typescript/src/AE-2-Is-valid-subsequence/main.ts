// const ARRAY_1 = [3, 5, -4, 8, 11, 1, -1, 6]

class IsValidSubsequence {
	handle(array: number[], sequence: number[]) {
		let index = 0;
		for (let num of array) {
			if (num === sequence[index]) index++;
		}
		return index === sequence.length;
	}
}

export default IsValidSubsequence;
