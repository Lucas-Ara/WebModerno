//par nome/valor
const saudacao = "Opa"; // Contexto léxico 1

function exec(){
    const saudacao = "Falaaa"; // contexto léxico 2
    return saudacao
}

// Objetos são grupos aninhados de pares nome/valor
const Clientes = {
    nome: "pedro",
    idade: 32,
    peso: 90,
    edereco:{
        logradouro: "rua muito legal",
        numero: 123
    }
}
console.log(saudacao);
console.log(exec());