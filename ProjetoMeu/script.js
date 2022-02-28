var num = window.document.getElementById('numero')
var numatras = window.document.getElementById('natras')
var joia = window.document.getElementById('emojijoia')
var joia1 = window.document.getElementById('emojijoia1')
var emojigrana = window.document.getElementById('emoji')
emojigrana.innerHTML += `\u{1F64A} \u{1F911}`
function numCartao(n){
    if(Number(n) != 0){
        return true
    } else{
        return false
    }
}
function numAtras(z){
    if(Number(z) != 0){
        return true  
    } else {
        return false
    }
}


function clicar(){
    if(numCartao(num.value) && numAtras(numatras.value)){
        joia.innerHTML += `\u{1F44D}`
        joia1.innerHTML += `\u{1F44D}`
        window.confirm(`Então vamos conferir, os números da frente do seu cartão são ${num.value} e os de trás são ${numatras.value}. Confirma?`)
        window.prompt('Agradecemos muito sua paciência e confiança em nós! Digite seu e-mail abaixo para receber os giftcards relativos aos prêmios:')
       
    } else{     
        alert('[ERRO] Faltam escrever os dados do cartão')
    }
    
}