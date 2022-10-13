export function add(a, b) {
    return +a + Number(b); //dos formas distintas que convertir algo a numero
}

export function subtraction(a, b) {
    return a - b;
}

export function division(a, b) {
    const zeroError = new Error('ERROR, no se puede dividir entre 0');
    const paramError = new Error('ERROR, parametro no valido');

    if (b === 0) {
        throw zeroError;
    }
    if (a === null || b === null) {
        throw paramError;
    }
    if (isNaN(a) || isNaN(b)) {
        throw paramError;
    }
    return a / b;
}
