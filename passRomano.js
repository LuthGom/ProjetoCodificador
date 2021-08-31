// // Objetivo principal: Criar um codificador e um decodificador para CIfra de César e outros para base64
// // criar caixas de textos, como input, no mundo HTML que vão receber valores postos pelo usuário e, a partir do valor captado, o código vai codificare decodificar para cifra de césar e/ou base64



// variavel para captar o texto de entrada
let textoDeEntrada = document.querySelector('#texto')
// variavel para captar o texto de saída
let textodeSaida = document.querySelector('#retorno')
// variavel para captar o botao de codificação/decodificação
let botao = document.querySelector('#botao')
// variavel para captar o input-radio com o valor 'codificar'
let codificar = document.querySelector('#codificar')
// variavel para captar o input-radio com o valor 'decodificar
let decodificar = document.querySelector('#decodificar')
// variavel para captar a div que contem os elementos da página
let divao = document.querySelector('div')
// variavel para captar a caixa de seleção
let selecao = document.querySelector('#codigo')
let chaveDeCodigo = document.querySelector('#chave')

// evento que altera o valor do botão para 'Codificar Mensagem'
codificar.addEventListener('click', function () {
    botao.textContent = 'Codificar Mensagem'
})
// evento que altera o valor do botão para 'Decodificar Mensagem'
decodificar.addEventListener('click', function () {
    botao.textContent = 'Decodificar Mensagem'
})
// evento para codificar/decodificar em Base64 o texto de entrada ao clicar no botão
botao.addEventListener('click', function () {
    //caso atenda aos parametros, codifica com Base64
    if (selecao.value === '1' && botao.textContent === 'Codificar Mensagem') {
        textodeSaida.value = btoa(textoDeEntrada.value)
    }
    //caso atenda aos parametros, decodifica com BAse64
    else if (selecao.value === '1' && botao.textContent === 'Decodificar Mensagem') {
        textodeSaida.value = atob(textodeSaida.value)
    }
    
    //caso atenda aos parametros, codifica com Cifra de César
    else if (selecao.value === '2' && botao.textContent === 'Codificar Mensagem') {
        
        textodeSaida.textContent = codCifra(textoDeEntrada.value, chaveDeCodigo.value)
    }
    //caso atenda aos parametros, decodifica com Cifra de César
    else if (selecao.value === '2' && botao.textContent === 'Decodificar Mensagem') {
        
        textodeSaida.textContent = decCifra(textoDeEntrada.value, chaveDeCodigo.value)
    }
   
})



function codCifra(string, chave) {

    (String(string.split('')))
    let chavis = Number(chave)
    let resultado = []
    let retorno = []

    for (i = 0; i < string.length; i++) {


        if (string.charCodeAt(i) === 32) {
            resultado.push((string.charCodeAt(i)))
        }
        else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            resultado.push((((string.charCodeAt(i) - 65) + chavis) % 26) + 65)
        }
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            resultado.push((((string.charCodeAt(i) - 97) + chavis) % 26) + 97)
        }
        else {
            resultado.push((string.charCodeAt(i)))

        }

    }
    for (j = 0; j < resultado.length; j++) {
        retorno.push(String.fromCharCode(resultado[j]))
        // console.log(retorno)
    }
    return retorno.join('')

}


// Função para decodificar mensagens cifradas com Cifra de César
function decCifra(string, chave) {
    console.log(string);
    (String(string.split('')))
    let chavis = Number(chave)
    let resultado = []
    let retorno = []

    for (i = 0; i < string.length; i++) {

        if (string.charCodeAt(i) === 32) {
            resultado.push((string.charCodeAt(i)))
        }
        else if (string.charCodeAt(i) >= 65 && string.charCodeAt(i) <= 90) {
            resultado.push((((string.charCodeAt(i) - 65) - chavis) % 26) + 65)
        }
        else if (string.charCodeAt(i) >= 97 && string.charCodeAt(i) <= 122) {
            resultado.push((((string.charCodeAt(i) - 97) - chavis) % 26) + 97)
        }
        else {
            resultado.push((string.charCodeAt(i)))

        }
    }
    for (j = 0; j < resultado.length; j++) {
        retorno.push(String.fromCharCode(resultado[j]))

    }
    return retorno.join('')

}