/* Closure é o escopo criado quando uma função é declarada 
esse escopo permite a função acessar e manipular variáveis externas da função 
    Contexto léxico em Ação!!
*/

const x = "Global"

function fora (){
    const x = "Locaal"
    function dentro(){
        return x
    }
    return dentro 
}

const minhaFuncao = fora ()
console.log(minhaFuncao())