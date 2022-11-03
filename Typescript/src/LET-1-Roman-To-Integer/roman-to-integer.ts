function value(s: string): number {
	switch (s) {
		case 'I':
			return 1;
		case 'V':
			return 5;
		case 'X':
			return 10;
		case 'L':
			return 50;
		case 'C':
			return 100;
		case 'D':
			return 500;
		case 'M':
			return 1000;
		default:
			return -1;
	}
}

export default function romanToInt(s: string): number {
	let finalValue = 0;

	for (let i = s.length - 1; i >= 0; i--) {
		if (['V', 'X'].includes(s[i + 1]) && s[i] === 'I') finalValue -= value(s[i]);
		else if (['L', 'C'].includes(s[i + 1]) && s[i] === 'X') finalValue -= value(s[i]);
		else if (['D', 'M'].includes(s[i + 1]) && s[i] === 'C') finalValue -= value(s[i]);
		else finalValue += value(s[i]);
	}

	return finalValue;
}
