// // Objetivo principal: Criar um codificador e um decodificador para CIfra de César e outros para base64
// // criar caixas de textos, como input, no mundo HTML que vão receber valores postos pelo usuário e, a partir do valor captado, o código vai codificare decodificar para cifra de césar e/ou base64
// var mensagem = ''
// var incremento = ''


// variavel para captar o texto de entrada
let textoDeEntrada = document.querySelector('#texto')
// variavel para captar o texto de saída
let textodeSaida = document.querySelector('#retorno')
// variavel para captar o botao de codificação/decodificação
let botao = document.querySelector('#botao')
// variavel para captar o input-radio com o valor 'codificar'
let codificar = document.querySelector('#codificar')
// variavel para captar o input-radio com o valor 'decodificar
let decodificar= document.querySelector('#decodificar')
// variavel para captar a div que contem os elementos da página
let divao = document.querySelector('div')
// variavel para captar a caixa de seleção
let selecao = document.querySelector('#codigo')


// evento que altera o valor do botão para 'Codificar Mensagem'
codificar.addEventListener('click', function() {
        botao.textContent = 'Codificar Mensagem'
})
// evento que altera o valor do botão para 'Decodificar Mensagem'
decodificar.addEventListener('click', function() {
    botao.textContent = 'Decodificar Mensagem'
})
// evento para codificar/decodificar o texto de entrada ao clicar no botão
botao.addEventListener('click', function() {
    if (selecao.value === 'Base64' && botao.textContent === 'Codificar Mensagem') {
        textodeSaida.value = btoa(textoDeEntrada.value)
    }
    else if (selecao.value === 'Base64' && botao.textContent === 'Decodificar Mensagem') {
        textodeSaida.value = atob(textodeSaida.value)
    }
})

