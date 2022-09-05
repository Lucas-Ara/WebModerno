// novo recurso do es2015

const pessoa = {
    nome: "Lucas",
    idade:25,
    endereco: {
        logradouro: "rua abc",
        numero: 1
    }

}

const {nome, idade} = pessoa
console.log(nome, idade);

const { nome: n, idade: i} = pessoa
console.log(n, i)

const {sobrenome, bemHumorado = true} = pessoa
console.log(sobrenome, bemHumorado)

const {endereco:{logradouro,numero, cep}} = pessoa
console.log(logradouro,numero,cep)

const {conta: {ag, num}} = pessoa
console.log(ag,num)