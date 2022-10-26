const notas = [7, 6, 8, 5, 4, 3.6, 7.1]

//sem callback
let notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas);

//com callback
const notasBaixas2= notas.filter(function (nota){
    return nota < 7
})

console.log(notasBaixas2)

const notasBaixas3 = notas.filter(nota => nota < 7 )
console.log(notasBaixas3)