// pessoa -> 123 -> {...}
const pessoa = {nome: "Joao"}
pessoa.nome = "pedro"
console.log(pessoa)

//pessoa -> 456 -> {...}
//pessoa = {nome: "Ana"};

//congela o Objeto
Object.freeze(pessoa);

pessoa.nome = "Maria";
pessoa.end = "Rua 123"
delete pessoa.nome;

console.log(pessoa.nome);
console.log(pessoa);

const pessoaConstante = Object.freeze({nome: "Lucas"});
pessoaConstante.nome = "joao"
console.log(pessoaConstante)