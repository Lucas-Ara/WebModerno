function criaProduto(nome, preco){
    return{
        nome,
        preco,
        desconto: 0.1
    }
}

console.log(criaProduto("Notebook", 2199.49));
console.log(criaProduto("iPad", 1199.49));