function tratarErroElancar(erro){
    throw {
        //throw new erro("...")
        //throw 10
        //throw true
        //throw "Mensagem"
        nome: erro.name,
        msg: erro.message,
        date: new Date
    }
}
function imprimirNomeGritando(obj){
    try {
    console.log(obj.name.toUppercase() + "!!!")
    } catch (e){
        tratarErroElancar(e)
    }finally{
        console.log("final")
    }
}

const obj = {nome : "roberto"}
imprimirNomeGritando(obj)