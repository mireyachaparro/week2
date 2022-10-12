import { strictEquals } from './equals.js';

//gherkin: given - when - then

describe('given strict equals function', () => {
    test('when parameters are 1 and 1 then result should be true', () => {
        //AAA: Arrange Act Asset
        //Arrange
        const a = 1;
        const b = 1;
        const expectedResult = true;
        //Act
        const result = strictEquals(a, b);
        //Asset
        expect(result).toBe(expectedResult);
    });

    test('when parameters are NaN and NaN then result should be false', () => {
        const a = NaN;
        const b = NaN;
        const expectedResult = false;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are 0 and -0 then result should be true', () => {
        const a = 0;
        const b = -0;
        const expectedResult = true;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are -0 and 0 then result should be true', () => {
        const a = -0;
        const b = 0;
        const expectedResult = true;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are 1 and "1" then result should be false', () => {
        const a = 1;
        const b = '1';
        const expectedResult = false;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are true and false then result should be false', () => {
        const a = true;
        const b = false;
        const expectedResult = false;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are false and false then result should be true', () => {
        const a = false;
        const b = false;
        const expectedResult = true;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });

    test('when parameters are "water" and "oil" then result should be false', () => {
        const a = 'water';
        const b = 'oil';
        const expectedResult = false;

        const result = strictEquals(a, b);

        expect(result).toBe(expectedResult);
    });
});
