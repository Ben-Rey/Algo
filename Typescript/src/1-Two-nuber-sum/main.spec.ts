import twoArraySum from './main';

describe('First Two Number Sum', () => {

    const ARRAY_1 = [3, 5, -4, 8, 11, 1, -1, 6]
    
    test('should return the two numbers whose the sum is equal to a target', () => {
      expect(twoArraySum.calc(ARRAY_1, 8)).toEqual(expect.arrayContaining([3, 5]))
      expect(twoArraySum.calc(ARRAY_1, 1)).toEqual(expect.arrayContaining([5, -4]))
      expect(twoArraySum.calc(ARRAY_1, 13)).toEqual(expect.arrayContaining([5, 8]))
      expect(twoArraySum.calc(ARRAY_1, 7)).toEqual(expect.arrayContaining([-4, 11]))
      expect(twoArraySum.calc(ARRAY_1, 19)).toEqual(expect.arrayContaining([8, 11]))
      
    });

    test('should return an empty array if sum does not exist', ()=>{
      expect(twoArraySum.calc(ARRAY_1, 39)).toStrictEqual([])
    })
});

describe('First Three Number Sum', () => {
});


