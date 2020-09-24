// funções que operam em outras funções
// tomando-as como argumentos ou retornando-as,
// são chamadas de higher-order functions.

function executar(fn, ...params) {
    return function (textoInicial) {
        return `${textoInicial} ${fn(...params)}!`
    }
}

function somar(a, b, c) {
    return a + b + c
}

function multi(a, b) {
    return a * b
}

const r1 = executar(somar, 4, 5, 6)('Total da soma:')
const r2 = executar(multi, 30, 40)('Total da multiplicação:')

console.log(r1)
console.log(r2)