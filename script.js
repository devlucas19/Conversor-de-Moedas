

// Puxando cotação e atribuindo nas variáveis

let url = "https://economia.awesomeapi.com.br/json/last/USD-BRL,EUR-BRL"
let valDol = ""
let valEuro = ""


fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        console.log(data)
        let ask = data.USDBRL.ask
        valDol = ask
        let askEuro = data.EURBRL.ask
        valEuro = askEuro
        document.getElementById("statusMoedas").textContent = `1 Dólar = R$${ask} | 1 Euro = €${askEuro}`
    })



// Botão de Conversão com checagem de valor selecionado

btnConverter.addEventListener('click', function () {

    let $input = document.getElementById("valor");
    let valor = $input.value
    let moedaSelecionada = document.getElementById("select")
    let moedaConvertida = ' '
    let resultado = ' '

    console.log('Escolhe a moeda estrangeira')

    if (moedaSelecionada.options[select.selectedIndex].value == "dolar") {
        moedaConvertida = valor / valDol
        resultado = "U$ " + moedaConvertida.toFixed(2).replace(".", ",")
        document.getElementById("resultado").style.display = "flex"
        document.getElementById("resultado").innerHTML = resultado
        console.log(moedaSelecionada.value)
    }
    if (moedaSelecionada.options[select.selectedIndex].value == "euro") {
        moedaConvertida = valor / valEuro;
        resultado = `€ ${moedaConvertida.toFixed(2).replace(".", ",")}`
        document.getElementById("resultado").style.display = "flex"
        document.getElementById("resultado").innerHTML = resultado
        console.log(moedaSelecionada.value)
    }
})



// Conversão e atribuição de alta e baixa

fetch(url).then((response) => {
    return response.json()
}).then((data) => {
    let high = data.USDBRL.high
    document.getElementById("high").innerHTML = high

    let low = data.USDBRL.low
    document.getElementById("low").innerHTML = low
})

fetch(url).then((response) => {
    return response.json()
}).then((data) => {
    let highEur = data.EURBRL.high
    document.getElementById("highEur").innerHTML = highEur

    let lowEur = data.EURBRL.low
    document.getElementById("lowEur").innerHTML = lowEur
})
