// Os dois tipos...
// 1. Operadores de Criação
const { of } = require('rxjs')

// 2. Operadores Encadeáveis (Pipeable Operators)
const { last, map } = require('rxjs/operators')

// of(1, 2, 'tiago', false, 'último')
//     .pipe(last())
//     .pipe(map(v => v[0]))
//     .subscribe(function(valor) {
//         console.log(`O valor gerado foi: ${valor}`)
//     })

of(1, 2, 'tiago', false, 'último')
    .pipe(
        last(),
        map(v => v[0]),
        map(v => `A letra encontrada foi: ${v}`)
    )
    .subscribe(function(valor) {
        console.log(valor)
    })