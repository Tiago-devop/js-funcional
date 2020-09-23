
const PI = 3.14

// impura - PI é um valor externo!
function areaCircular(raio) {
    return raio * raio * PI
}

console.log(areaCircular(10))
console.log(areaCircular(10))
console.log(areaCircular(10))

// Pura
function areaCircularPura(raio, pi) {
    return raio * raio * pi
}

console.log(areaCircularPura(10, 3.14))
console.log(areaCircularPura(10, 3.141592))
console.log(areaCircularPura(10, Math.PI))