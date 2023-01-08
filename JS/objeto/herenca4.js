function MeuObjeto(){}
console.log(MeuObjeto.prototype);

const obj = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj.__proto__===obj2.__proto__)
console.log(MeuObjeto.prototype === obj.__proto__)


MeuObjeto.prototype.nome = "Anônimo"
MeuObjeto.prototype.falar = function(){
    console.log(`Boom dia!! Meu nome é ${this.nome}!`)
}

obj.falar()

obj2.nome = "Rafael";
obj2.falar();

const obj3 = {}
obj3.__proto__=MeuObjeto.prototype
obj3.nome = "obj3"
obj3.falar()

// Resumo a Loucura...
console.log((new MeuObjeto).__proto__=== MeuObjeto.prototype)
console.log(MeuObjeto.__proto__=== Function.prototype)
console.log(Function.prototype.__proto__===Object.prototype)
console.log(Object.prototype.__proto__=== undefined)

