//refactorizar equals.test.js

import { strictEquals } from './equals.js';

//gherkin: given - when - then.

describe('given strict equals function', () => {
    //arrange
    const cases = [
        { a: 1, b: 1, r: true },
        { a: NaN, b: NaN, r: false },
        { a: 0, b: -0, r: true },
        { a: -0, b: 0, r: true },
        { a: 1, b: '1', r: false },
        { a: true, b: false, r: false },
        { a: false, b: false, r: true },
        { a: 'water', b: 'oil', r: false },
        { a: 'water', b: 'water', r: true },
    ];

    cases.forEach((testCase) => {
        test(`when parameters are ${testCase.a} and ${testCase.b} then result should be ${testCase.r}`, () => {
            //act
            const result = strictEquals(testCase.a, testCase.b);
            //asset
            expect(result).toBe(testCase.r);
        });
    });
});
