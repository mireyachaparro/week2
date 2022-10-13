import { add, division, subtraction } from './sample.js';

describe('Testing add', () => {
    test('if a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBe(4);
    });

    test('if a = 2 and b = 2 add should be', () => {
        let a = 2;
        let b = 2;
        expect(add(a, b)).toBeLessThan(5);
    });
});

describe('Testing subtraction', () => {
    test('if a = 2 and b = 2 result should be 0', () => {
        let a = 2;
        let b = 2;
        expect(subtraction(a, b)).toBe(0);
    });
});

describe('Testing division', () => {
    test('if a = 4 and b = 2 return should be 2', () => {
        let a = 4;
        let b = 2;
        expect(division(a, b)).toBe(2);
    });
    test('if b = 0 return should be error', () => {
        let a = 2;
        let b = 0;
        expect(() => {
            division(a, b);
        }).toThrow();
    });
    test('if b = 0 return should be error', () => {
        let a = null;
        let b = 5;

        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('ERROR, parametro no valido');
        }
    });
    test('if a = NaN return should be error', () => {
        let a = 'pepe';
        let b = 5;

        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('ERROR, parametro no valido');
        }
    });
    test('if b = NaN return should be error', () => {
        let a = 5;
        let b = 'pepe';

        try {
            division(a, b);
        } catch (e) {
            expect(e.message).toBe('ERROR, parametro no valido');
        }
    });
});

//funcion expect: espero algo de lo que hay dentro

//descripcion y funcion que se la pasas a otra funcion para que haga cosas.
