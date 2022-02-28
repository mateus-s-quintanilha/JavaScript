var num = window.document.getElementById('anal')
var lista = window.document.getElementById('lista')
var res = window.document.getElementById('res')
var valores = []

function isNumero(n) {
    if(Number(n) >= 1 && Number(n) <= 100){
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1){
        return true
    } else {
        return false 
    }

}

function adicionar() {
if(isNumero(num.value) && !inLista(num.value, valores)) {
    valores.push(Number(num.value))
    var item = window.document.createElement('option')
    item.text = `Valor ${num.value} adicionado`
    lista.appendChild(item)
    res.innerHTML = ''
} else {
    alert('[ERRO]')
}
num.value = ''
num.focus()  
}
function finalizar() {
    if(valores.length == 0){
        alert('[ERRO]')
    } else {
        let tot = valores.length
        let maior = valores[0]
        let menor = valores[0]
        let soma = 0
        let media = 0
        
        for(let pos in valores) {
            soma += valores[pos]

            if(valores[pos] > maior)
                maior = valores[pos]
            if(valores[pos] < menor) 
                menor = valores[pos]
        }
        media = soma / tot
        res.innerHTML = ''
        res.innerHTML += `<p>Ao todo, temos ${tot} números cadastrados</p>`
        res.innerHTML += `<p>O maior valor informado foi ${maior}</p>`
        res.innerHTML += `<p>O menos valor informado foi ${menor}</p>`
        res.innerHTML += `<p>Somando todos os valores, o resultado é ${soma}</p>`
        res.innerHTML += `<p>A média dos valores é ${media}</p>`
    }   
}
   

    
