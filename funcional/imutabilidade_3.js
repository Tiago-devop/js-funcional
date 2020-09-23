const pessoa = {
    nome: 'Maria',
    altura: 1.76,
    cidade: 'São Paulo',
    end: {
        rua: 'feliz!'
    }
}

// Atribuição por Referência (Função impura!)
const outraPessoa = pessoa

// Passagem por Referência
function alteraPessoa(pessoa) {
    const novaPessoa = { ... pessoa }
    novaPessoa.nome = 'Tiago'
    novaPessoa.cidade = 'DF'
    novaPessoa.end.rua = 'ABC'
    return novaPessoa
}

const novaPessoa = alteraPessoa(pessoa)
console.log(pessoa)
console.log(novaPessoa)

let a = 3
let b = a // atribuição por valor (copia!)

a++
b--
console.log(a, b)