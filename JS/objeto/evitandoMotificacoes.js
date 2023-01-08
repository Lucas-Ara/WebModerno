// Object.preventExtensions

const produto = Object.preventExtensions({
    nome: "Celular", preco: 899, tag:"promoção"
})

produto.nome = "Borracha"
produto.descricao = "Borracha escola branca"
delete produto.tag
console.log(produto)

//Object.seal

const pessoa = {nome: "Lucas", idade: 35}
Object.seal(pessoa)
console.log("Selado",Object.isSealed(pessoa))

pessoa.sobrenome = "Araujo"
delete pessoa.nome
pessoa.idade = 25
console.log(pessoa)

//Object.freeze