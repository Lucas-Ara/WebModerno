const notas = [6.7, 7.4, 9, 8, 10];

for (let i in notas) {
    console.log(i, notas[i]);
}

const pessoa = {
    nome: "Ana",
    sobrenome: "Silva",
    idade: 29,
    peso: 75
}

for(atributo in pessoa){
    console.log(`${atributo} = ${pessoa[atributo]}`)
}

console.log(atributo);