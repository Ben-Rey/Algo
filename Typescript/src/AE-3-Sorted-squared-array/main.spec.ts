import SortedSquaredArray from './main';

describe('sortedSquaredArray', () => {
	it.each`
		array                                | equal
		${[]}                                | ${[]}
		${[1, 2, 3, 4, 5, 6, 7, 8, 9]}       | ${[1, 4, 9, 16, 25, 36, 49, 64, 81]}
		${[-3, -2, -1, 0, 4, 5, 6, 7, 8, 9]} | ${[0, 1, 4, 9, 16, 25, 36, 49, 64, 81]}
	`(`shoul square`, ({ array, equal }) => {
		expect(new SortedSquaredArray().handleOptimal(array)).toEqual(equal);
	});
});
