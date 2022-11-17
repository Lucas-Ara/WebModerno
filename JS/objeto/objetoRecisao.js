// coleção dinâmica de pares chave/valor

const produto = new Object
produto.nome = "cadeira"
produto["Marca do produto"] = "Generica";
produto.preco = 220

console.log(produto);
delete produto.preco
delete produto["Marca do produto"]
console.log(produto);

const carro = {
    modelo: "A4",
    valor: 89000,
    proprietario:{
        nome: "Lucas",
        idade: 25,
        endereco:{
            logradouro: "Rua A",
            numero: 1
        }
    },condutores :[{
        nome:"Victor",
        idade: 18
    }, { 
        nome:"Neide",
        idade: 45
    }], 
    calcularValorSeguro: function(){
        //...
    }
}

carro.proprietario.endereco.numero = 1000
carro["proprietario"]["endereco"]["logradouro"]
console.log(carro)

// delete carro.condutores
delete carro.proprietario.endereco;
delete carro.calcularValorSeguro;
console.log(carro);