class SortedSquaredArray {
	square(value: number) {
		return value * value;
	}
	handleOptimal(array: number[]) {
		const resultArray = new Array(array.length);
		let iLeft = 0;
		let iRight = array.length - 1;

		for (let i = array.length - 1; i >= 0; i--) {
			if (Math.abs(array[iLeft]) > Math.abs(array[iRight])) {
				resultArray[i] = this.square(array[iLeft]);
				iLeft++;
			} else {
				resultArray[i] = this.square(array[iRight]);
				iRight--;
			}
		}
		return resultArray;
	}
}

export default SortedSquaredArray;
