import { add, subtraction } from './sample.js';

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
    test('if a = 0 should be ERROR', () => {
        let a = 0;
        let b = 2;
        expect(add(a, b)).toBe('ERROR');
    });
    test('if b = 0 should be ERROR', () => {
        let a = 8;
        let b = 0;
        expect(add(a, b)).toBe('ERROR');
    });
});

describe('Testing subtraction', () => {
    test('if a = 2 and b = 2 subtraction should be 0', () => {
        let a = 2;
        let b = 2;
        expect(subtraction(a, b)).toBe(0);
    });
});

//funcion expect: espero algo de lo que hay dentro

//descripcion y funcion que se la pasas a otra funcion para que haga cosas
