// Criar um Codificar/Decodificador beaseado na Cifra de César
// Cifra de César consiste em atribuir valores númericos às letras do alfabeto, em sequência e, somar um incremento fixo para que uma letra se torne outra, a partir desse incremento.

// Para criar um codificador baseado na cifra de César será necessário uma função com 2 parametros, onde: O primeiro seja a string que ela quer decifrar e o segundo a número de deslocamento.
// montar um array e incrementar o deslocameto à posição de cada elemento
// o método .charCodeAt(index) retorna apenas um caracter por vez convertido.
function cifraDeCesar (string, deslocamento) {
    let textoDeEntrada = string
    

    let alfabeto = (textoDeEntrada.charCodeAt() + deslocamento)
    let retorno = String.fromCharCode(alfabeto)
    return retorno
}
console.log(cifraDeCesar('luth', 3));