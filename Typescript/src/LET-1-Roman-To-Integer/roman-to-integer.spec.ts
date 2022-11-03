import romanToInt from './roman-to-integer';

describe('roman-to-integer', () => {
	it('should return 1 if I is provided', () => {
		expect(romanToInt('I')).toBe(1);
	});

	it('should return 2 if II is provided', () => {
		expect(romanToInt('II')).toBe(2);
		expect(romanToInt('III')).toBe(3);
	});

	it('should return 58 if LVIII is provided', () => {
		expect(romanToInt('LVIII')).toBe(58);
	});

	it('should return 4 if IV is provided', () => {
		expect(romanToInt('IV')).toBe(4);
	});

	it('should return 1994 if MCMXCIV is provided', () => {
		expect(romanToInt('MCMXCIV')).toBe(1994);
	});
	it('should return 9 if IX is provided', () => {
		expect(romanToInt('IX')).toBe(9);
	});
	it('should return 621 if DCXXI is provided', () => {
		expect(romanToInt('DCXXI')).toBe(621);
	});
});
